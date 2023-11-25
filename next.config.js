/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: "images.unsplash.com" } ,
        { hostname: "encrypted-tbn0.gstatic.com"},
        {hostname:"unsplash.com" }

      ]
    },
 experimental:{
    serverActions:true,
 },
}
  
  module.exports = nextConfig;
  