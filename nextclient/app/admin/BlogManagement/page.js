'use client'

/**
 * Admin Blog Management Page
 * Manage all blogs - view, edit, delete
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import blogService from '@/services/blogService';
import AdminLayout from '@/components/AdminLayout';
import BlogTable from '@/components/BlogTable';
import Loader from '@/components/Loader';
import toast from 'react-hot-toast';
import { MdClose, MdCloudUpload, MdStar, MdCheckCircle } from 'react-icons/md';

const gold = '#c9a84c';

export default function BlogManagement() {
  const router = useRouter();
  const navigate = (path) => router.push(path);
  const { admin, checkAuth } = useAuthStore();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0 });
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [editFormData, setEditFormData] = useState(null);
  const [editLoading, setEditLoading] = useState(false);
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


  useEffect(() => { fetchBlogs(); }, [pagination.page]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await blogService.getAdminBlogs(pagination.page, pagination.limit);
      setBlogs(response.data.blogs);
      setPagination(prev => ({ ...prev, total: response.data.total }));
    } catch (error) {
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        await blogService.deleteBlog(blogId);
        toast.success('Blog deleted successfully');
        fetchBlogs();
      } catch (error) {
        toast.error('Failed to delete blog');
      }
    }
  };

  const handleEditBlog = async (blogId) => {
    setEditLoading(true);
    try {
      const response = await blogService.getBlogById(blogId);
      setEditFormData(response.data.blog);
      setEditingBlogId(blogId);
    } catch (error) {
      console.error('Failed to load blog details:', error);
      toast.error('Failed to load blog details');
    } finally {
      setEditLoading(false);
    }
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEditImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
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
      setEditFormData({ ...editFormData, image: data.image, imagePublicId: data.imagePublicId });
      toast.success('Image uploaded successfully!');
    } catch (error) {
      toast.error('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editFormData.title || !editFormData.description || !editFormData.content || !editFormData.image) {
      toast.error('Please fill in all required fields');
      return;
    }
    setEditLoading(true);
    try {
      await blogService.updateBlog(editingBlogId, editFormData);
      toast.success('Blog updated successfully!');
      setEditingBlogId(null);
      setEditFormData(null);
      fetchBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update blog');
    } finally {
      setEditLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingBlogId(null);
    setEditFormData(null);
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
    <AdminLayout pageTitle="Manage Blogs" pageSubtitle="Edit & manage all your blog posts">
      <div style={{ maxWidth: '100%' }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
            <Loader size="md" text="Loading blogs..." />
          </div>
        ) : (
          <BlogTable 
            blogs={blogs} 
            loading={loading} 
            onDelete={handleDeleteBlog}
            onEdit={handleEditBlog}
            onRefresh={fetchBlogs}
            pagination={pagination}
            onPaginationChange={(page) => setPagination(prev => ({ ...prev, page }))}
          />
        )}

        {/* Edit Modal */}
        {editingBlogId && editFormData && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: '20px',
          }}>
            <div style={{
              background: '#ffffff', borderRadius: '20px', padding: '2rem',
              maxWidth: '800px', width: '100%', maxHeight: '90vh', overflowY: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              fontFamily: "'Inter', 'Segoe UI', 'Georgia', serif",
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '20px', fontWeight: '700' }}>Edit Blog</h2>
                <button
                  onClick={handleCancelEdit}
                  style={{
                    background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer',
                    color: '#6c757d', display: 'flex', alignItems: 'center',
                  }}
                >
                  <MdClose />
                </button>
              </div>

              <form onSubmit={handleSaveEdit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {/* Title */}
                <div>
                  <label style={labelStyle}>Title <span style={{ color: '#e53e3e' }}>*</span></label>
                  <input type="text" name="title" value={editFormData.title} onChange={handleEditChange}
                    style={inputStyle} placeholder="Enter blog title" required disabled={editLoading || uploadingImage}
                    onFocus={e => e.target.style.borderColor = gold}
                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                {/* Description */}
                <div>
                  <label style={labelStyle}>Description <span style={{ color: '#e53e3e' }}>*</span></label>
                  <textarea name="description" value={editFormData.description} onChange={handleEditChange}
                    rows="3" style={{ ...inputStyle, resize: 'none' }}
                    placeholder="Brief description of your blog post" required disabled={editLoading || uploadingImage}
                    onFocus={e => e.target.style.borderColor = gold}
                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                {/* Content */}
                <div>
                  <label style={labelStyle}>Content <span style={{ color: '#e53e3e' }}>*</span></label>
                  <textarea name="content" value={editFormData.content} onChange={handleEditChange}
                    rows="6" style={{ ...inputStyle, resize: 'none' }}
                    placeholder="Write your blog content here..." required disabled={editLoading || uploadingImage}
                    onFocus={e => e.target.style.borderColor = gold}
                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label style={labelStyle}>Upload Image <span style={{ color: '#e53e3e' }}>*</span></label>
                  <input type="file" accept="image/*" onChange={handleEditImageUpload}
                    style={{ ...inputStyle, cursor: 'pointer', color: '#6c757d' }}
                    disabled={editLoading || uploadingImage}
                  />
                  <p style={{ color: '#adb5bd', fontSize: '11px', marginTop: '5px' }}>
                    Supported: JPEG, PNG, GIF, WebP (Max 20MB)
                  </p>
                  {uploadingImage && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: gold, fontSize: '13px', marginTop: '8px' }}>
                      <MdCloudUpload style={{ fontSize: '16px' }} /> Uploading image...
                    </div>
                  )}
                  {editFormData.image && (
                    <div style={{ marginTop: '10px' }}>
                      <p style={{ color: '#6c757d', fontSize: '12px', marginBottom: '6px' }}>Preview:</p>
                      <img src={editFormData.image} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px', border: `2px solid ${gold}40` }} />
                    </div>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label style={labelStyle}>Category</label>
                  <select name="category" value={editFormData.category} onChange={handleEditChange}
                    style={{ ...inputStyle }}
                    disabled={editLoading || uploadingImage}
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
                    { name: 'featured', checked: editFormData.featured, icon: <MdStar style={{ color: '#f59e0b', fontSize: '14px' }} />, label: 'Featured Blog' },
                    { name: 'published', checked: editFormData.published, icon: <MdCheckCircle style={{ color: '#10b981', fontSize: '14px' }} />, label: 'Publish Now' },
                  ].map(({ name, checked, icon, label }) => (
                    <label key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input type="checkbox" name={name} checked={checked} onChange={handleEditChange}
                        style={{ width: '16px', height: '16px', accentColor: gold, cursor: 'pointer' }}
                        disabled={editLoading || uploadingImage}
                      />
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#4a5568', fontSize: '13px', fontWeight: '500' }}>
                        {icon} {label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '0.25rem' }}>
                  <button
                    type="submit" disabled={editLoading || uploadingImage}
                    style={{
                      flex: 1, padding: '13px',
                      background: (editLoading || uploadingImage) ? `${gold}80` : gold,
                      border: 'none', borderRadius: '12px',
                      color: '#fff', fontSize: '15px', fontWeight: '600',
                      cursor: (editLoading || uploadingImage) ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { if (!editLoading && !uploadingImage) e.currentTarget.style.opacity = '0.9'; }}
                    onMouseLeave={e => { if (!editLoading && !uploadingImage) e.currentTarget.style.opacity = '1'; }}
                  >
                    {editLoading ? (
                      <><Loader size="sm" text="" /><span>Updating...</span></>
                    ) : (
                      <span>Save Changes</span>
                    )}
                  </button>
                  <button
                    type="button" onClick={handleCancelEdit}
                    disabled={editLoading || uploadingImage}
                    style={{
                      flex: 1, padding: '13px',
                      background: '#f8f9fa', border: '1px solid #e9ecef',
                      borderRadius: '12px',
                      color: '#6c757d', fontSize: '15px', fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { if (!editLoading && !uploadingImage) { e.currentTarget.style.background = '#f1f3f5'; e.currentTarget.style.borderColor = '#dee2e6'; } }}
                    onMouseLeave={e => { if (!editLoading && !uploadingImage) { e.currentTarget.style.background = '#f8f9fa'; e.currentTarget.style.borderColor = '#e9ecef'; } }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}



