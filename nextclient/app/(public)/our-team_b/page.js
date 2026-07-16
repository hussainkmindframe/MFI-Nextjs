// 'use client'

// const Shanawaz = '/assets/team/Shanawaz-sir.jpg';
// const Hina = '/assets/team/hina-mam.jpg';
// const Aaqib = '/assets/team/Aaqib.jpg';
// const Shadab = '/assets/team/shadab.png';
// const Veena = '/assets/team/veena.png';
// const Aashi = '/assets/team/aashi.png';
// const Abdul = '/assets/team/Abdul.png';
// const Abdul2 = '/assets/team/abdul2.png';

// const Taufiq = '/assets/team/taufiq.png';
// const Altaf = '/assets/team/altaf.png';
// const Aman = '/assets/team/Aman.png';
// const salome = '/assets/team/salome.png';
// const Pranay = '/assets/team/Pranay.jpg';
// const sanket = '/assets/assets/team/sanket.png';
// const riyansh = '/assets/assets/team/riyansh.png';
// const kavya = '/assets/assets/team/kavya.png';
// const irfan = '/assets/assets/team/irfan.png';
// const hussain = '/assets/team/hussain.png';
// import SEO from '@/components/SEO';
// import { seoConfig } from '@/config/seoConfig';

// const teams = [
//   {
//     id: "directors",
//     title: "Directors",
//     isHeader: true,
//     members: [
//   null,
//   {
//     name: "Aaqib Ali",
//     role: "Brand Management & Digital Marketing",
//     img: Aaqib,
//   },
//   null,
// ],
//   },
//   {
//     id: "operations",
//     title: "Operations Management Team",
//     members: [
//       {
//         name: "kaviya Nagaraj",
//         role: "Human Resources",
//         img: kavya,
//         nameGold: true,
//       },
//       null,
//       {
//         name: "Shadab Sayyad",
//         role: "Accounts & Admin",
//         img: Shadab,
//       },
//     ],
//   },
//   {
//     id: "client",
//     title: "Client Servicing Team",
//     members: [
//       {
//         name: "Veena Kolety",
//         role: "Client Service Executive",
//         img: Veena,
//         nameGold: true,
//       },
//       null,
//       {
//         name: "Aashi Suman",
//         role: "Client Service Executive",
//         img: Aashi,
//         nameGold: true,
//       },
//     ],
//   },
//   {
//     id: "designers",
//     title: "Graphic Designers",
//     members: [
//       {
//         name: "Rashmika Shah",
//         role: "Graphic Designer",
//         img: null,
//       },
//       {
//         name: "Riyansh Asrani",
//         role: "Graphic Designer",
//         img: riyansh,
//       },
//       {
//         name: "Sanket Dait",
//         role: "Graphic Designer",
//         img: sanket, // no import provided for Neha
//       },
//       // {
//       //   name: "Salome Chetty",
//       //   role: "Graphic Designer",
//       //   img: null,
//       // },
//     ],
//   },
//   {
//     id: "uiux",
//     title: "UI / UX Designer",
//     members: [
//       null,
//       {
//         name: "Pranay Ramani",
//         role: "UI / UX Designer",
//         img: Pranay,
//         nameGold: true,
//       },
//       null,
//     ],
//   },
//    {
//     id: "video",
//     title: "Video Editor",
//     members: [
//       null,
//       {
//         name: "Irfan Shaikh",
//         role: "Video Editor",
//         img: irfan,
//         nameGold: true,
//       },
//       null,
//     ],
//   },
//   {
//     id: "digital",
//     title: "Digital Marketing Team",
//     members: [
//       null,
//       {
//         name: "Aman Tiwari",
//         role: "Social Media Executive",
//         img: Aman,
//         nameGold: true,
//       },
//       null,
//     ],
//   },
//   {
//     id: "it",
//     title: "IT & Development Team",
//   members: [
//   {
//     name: "Abdul Ansari",
//     role: "Sr. Full Stack Developer",
//     img: Abdul2,
//   },
//   {
//     name: "Hussain khan",
//     role: "Mern Stack Developer",
//     img: hussain,
//   },
//   {
//     name: "Altaf Ali",
//     role: "Web Developer",
//     img: Altaf,
//   },
//   null,
//   {
//     name: "Taufiq Mulla",
//     role: "App Developer",
//     img: Taufiq,
//   },
// ],
//   },
// ];

// function Avatar({ member }) {
//   if (!member) return <div />;
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "110px",
//           height: "110px",
//           borderRadius: "50%",
//           overflow: "hidden",
//           border: "2px solid #e8e2d9",
//           marginBottom: "14px",
//           background: "#eee",
//           flexShrink: 0,
//         }}
//       >
//         {member.img ? (
//           <img
//             src={member.img}
//             alt={member.name}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               objectPosition: "top",
//             }}
//           />
//         ) : (
//           <div
//             style={{
//               width: "100%",
//               height: "100%",
//               background: "#ddd",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
//               <circle cx="24" cy="18" r="10" fill="#bbb" />
//               <path d="M4 44c0-11 9-18 20-18s20 7 20 18" fill="#bbb" />
//             </svg>
//           </div>
//         )}
//       </div>
//       <p
//         style={{
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: "13.5px",
//           fontWeight: 500,
//           color: member.nameGold ? "#b08d57" : "#1a1510",
//           marginBottom: "4px",
//           lineHeight: 1.3,
//         }}
//       >
//         {member.name}
//       </p>
//       <div
//         style={{
//           width: "60px",
//           height: "1px",
//           background: "#d4b896",
//           margin: "4px auto 6px",
//         }}
//       />
//       <p
//         style={{
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: "12px",
//           color: "#888",
//           lineHeight: 1.4,
//         }}
//       >
//         {member.role}
//       </p>
//     </div>
//   );
// }

// function TeamSection({ team }) {
//   const members = team.members;
//   const rows = [];
//   for (let i = 0; i < members.length; i += 3) {
//     rows.push(members.slice(i, i + 3));
//   }

//   return (
//     <div style={{ borderTop: "1px solid #e0d0c8", padding: "44px 24px" }}>
//       <div style={{ maxWidth: "960px", margin: "0 auto" }}>
//         {/* Section heading */}
//         <div style={{ textAlign: "center", marginBottom: "36px" }}>
//           <h2
//             style={{
//               fontFamily: team.isHeader
//                 ? "'Cormorant Garamond', serif"
//                 : "'DM Sans', sans-serif",
//               fontSize: team.isHeader
//                 ? "clamp(32px, 5vw, 52px)"
//                 : "clamp(16px, 2.5vw, 20px)",
//               fontWeight: team.isHeader ? 700 : 400,
//               color: team.isHeader ? "#1a1510" : "#b08d57",
//               letterSpacing: team.isHeader ? "-0.5px" : "0.3px",
//               marginBottom: team.isHeader ? "10px" : "12px",
//             }}
//           >
//             {team.title}
//           </h2>
//           {!team.isHeader && (
//             <div
//               style={{
//                 width: "200px",
//                 height: "1px",
//                 background: "#b08d57",
//                 margin: "0 auto",
//               }}
//             />
//           )}
//           {team.isHeader && (
//             <div
//               style={{
//                 width: "48px",
//                 height: "2px",
//                 background: "#b08d57",
//                 margin: "0 auto",
//               }}
//             />
//           )}
//         </div>

//         {/* Member rows */}
//         {rows.map((row, ri) => (
//           <div
//             key={ri}
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "32px 16px",
//               marginBottom: ri < rows.length - 1 ? "32px" : 0,
//             }}
//           >
//             {row.map((member, ci) =>
//               member ? (
//                 <Avatar key={ci} member={member} />
//               ) : (
//                 <div key={ci} />
//               )
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function OurTeam() {
//   return (
//     <>
//       <SEO 
//         title={seoConfig.team.title}
//         description={seoConfig.team.description}
//         keywords={seoConfig.team.keywords}
//         path={seoConfig.team.path}
//       />
//       <div
//         style={{
//           fontFamily: "'DM Sans', sans-serif",
//           background: "#fff",
//           minHeight: "100vh",
//         }}
//       >
//       <style>{`
//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         @media (max-width: 560px) {
//           .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
//         }
//       `}</style>

  

//       {/* Team sections */}
//       {teams.map((team) => (
//         <TeamSection key={team.id} team={team} />
//       ))}
//     </div>
//     </>
//   );
// }


