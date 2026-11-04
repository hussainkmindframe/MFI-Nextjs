'use client'

/**
 * Admin Add Blog Page
 * Create new blog posts
 */

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import blogService from '@/services/blogService';
import AdminLayout from '@/components/AdminLayout';
import Loader from '@/components/Loader';
import toast from 'react-hot-toast';
import { MdEdit, MdAdd, MdCloudUpload, MdStar, MdCheckCircle } from 'react-icons/md';
import { useEffect } from 'react';

const gold = '#c9a84c';

export default function AddBlog() {
  const router = useRouter();
  const navigate = (path) => router.push(path);
  const { admin, checkAuth } = useAuthStore();
  const [formData, setFormData] = useState({
    title: '', description: '', content: '', image: '',
    category: 'Other', featured: false, published: true,
  });
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Naya:
useEffect(() => {
  const init = async () => {
    await checkAuth();
    const { admin } = useAuthStore.getState();
    if (!admin) navigate('/admin/login');
  };
  init();
}, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };



  const handleImageUpload = async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const MAX_SIZE = 2 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    toast.error('Image size must be under 2MB');
    e.target.value = '';
    return;
  }

  setUploadingImage(true);
  try {
    const formDataForUpload = new FormData();
    formDataForUpload.append('image', file);
    const response = await fetch('/api/blogs/upload-image', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
      body: formDataForUpload,
    });
    if (!response.ok) throw new Error('Image upload failed');
    const data = await response.json();
    setFormData({ ...formData, image: data.image, imagePublicId: data.imagePublicId });
    toast.success('Image uploaded successfully!');
  } catch (error) {
    toast.error('Failed to upload image');
  } finally {
    setUploadingImage(false);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.content || !formData.image) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    try {
      await blogService.createBlog(formData);
      toast.success('Blog created successfully!');
      navigate('/admin/blogs/add');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  if (!admin) return null;

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    padding: '11px 14px',
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    color: '#1a1a1a', fontSize: '14px', outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'Inter', 'Segoe UI', 'Georgia', serif",
  };

  const labelStyle = { display: 'block', color: '#4a5568', fontSize: '12px', fontWeight: '600', marginBottom: '7px', letterSpacing: '0.3px' };

  return (
    <AdminLayout pageTitle="Add New Blog" pageSubtitle="Create engaging content for your audience">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: '#ffffff', border: '1px solid #eef2f6',
          borderRadius: '20px', padding: '1.75rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
          fontFamily: "'Inter', 'Segoe UI', 'Georgia', serif",
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {/* Title */}
            <div>
              <label style={labelStyle}>Title <span style={{ color: '#e53e3e' }}>*</span></label>
              <input type="text" name="title" value={formData.title} onChange={handleChange}
                style={inputStyle} placeholder="Enter blog title" required disabled={loading || uploadingImage}
                onFocus={e => e.target.style.borderColor = gold}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>

            {/* Description */}
            <div>
              <label style={labelStyle}>Description <span style={{ color: '#e53e3e' }}>*</span></label>
              <textarea name="description" value={formData.description} onChange={handleChange}
                rows="3" style={{ ...inputStyle, resize: 'none' }}
                placeholder="Brief description of your blog post" required disabled={loading || uploadingImage}
                onFocus={e => e.target.style.borderColor = gold}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>

            {/* Content */}
            <div>
              <label style={labelStyle}>Content <span style={{ color: '#e53e3e' }}>*</span></label>
              <textarea name="content" value={formData.content} onChange={handleChange}
                rows="6" style={{ ...inputStyle, resize: 'none' }}
                placeholder="Write your blog content here..." required disabled={loading || uploadingImage}
                onFocus={e => e.target.style.borderColor = gold}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>

            {/* Image Upload */}
            <div>
              <label style={labelStyle}>Upload Image <span style={{ color: '#e53e3e' }}>*</span></label>
              <input type="file" accept="image/*" onChange={handleImageUpload}
                style={{ ...inputStyle, cursor: 'pointer', color: '#6c757d' }}
                disabled={loading || uploadingImage}
              />
              <p style={{ color: '#adb5bd', fontSize: '11px', marginTop: '5px' }}>
                Supported: JPEG, PNG (Max 2MB)
              </p>
              {uploadingImage && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: gold, fontSize: '13px', marginTop: '8px' }}>
                  <MdCloudUpload style={{ fontSize: '16px' }} /> Uploading image...
                </div>
              )}
              {formData.image && (
                <div style={{ marginTop: '10px' }}>
                  <p style={{ color: '#6c757d', fontSize: '12px', marginBottom: '6px' }}>Preview:</p>
                  <img src={formData.image} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px', border: `2px solid ${gold}40` }} />
                </div>
              )}
            </div>

            {/* Category */}
            <div>
              <label style={labelStyle}>Category</label>
              <select name="category" value={formData.category} onChange={handleChange}
                style={{ ...inputStyle }}
                disabled={loading || uploadingImage}
              >
                {['Marketing', 'Social Media',  'Other'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Checkboxes */}
            <div style={{
              display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
              background: '#fafbfc', border: '1px solid #eef2f6',
              borderRadius: '12px', padding: '12px 16px',
            }}>
              {[
                { name: 'featured', checked: formData.featured, icon: <MdStar style={{ color: '#f59e0b', fontSize: '14px' }} />, label: 'Featured Blog' },
                { name: 'published', checked: formData.published, icon: <MdCheckCircle style={{ color: '#10b981', fontSize: '14px' }} />, label: 'Publish Now' },
              ].map(({ name, checked, icon, label }) => (
                <label key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" name={name} checked={checked} onChange={handleChange}
                    style={{ width: '16px', height: '16px', accentColor: gold, cursor: 'pointer' }}
                    disabled={loading || uploadingImage}
                  />
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#4a5568', fontSize: '13px', fontWeight: '500' }}>
                    {icon} {label}
                  </span>
                </label>
              ))}
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={loading || uploadingImage}
              style={{
                padding: '13px',
                background: (loading || uploadingImage) ? `${gold}80` : gold,
                border: 'none', borderRadius: '12px',
                color: '#fff', fontSize: '15px', fontWeight: '600',
                cursor: (loading || uploadingImage) ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                transition: 'all 0.2s',
                marginTop: '0.25rem',
              }}
              onMouseEnter={e => { if (!loading && !uploadingImage) e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { if (!loading && !uploadingImage) e.currentTarget.style.opacity = '1'; }}
            >
              {loading ? (
                <><Loader size="sm" text="" /><span>Creating Blog...</span></>
              ) : (
                <><MdAdd style={{ fontSize: '18px' }} /> Create Blog Post</>
              )}
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}



