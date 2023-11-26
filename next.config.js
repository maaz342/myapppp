/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: "images.unsplash.com" } ,
        { hostname: "encrypted-tbn0.gstatic.com"},
        {hostname:"unsplash.com" },
        { hostname: "lh3.googleusercontent.com" },

      ]
    },
 experimental:{
    serverActions:true,
 },
}
  
  module.exports = nextConfig;
  