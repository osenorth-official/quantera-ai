/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'yjasfeanlannyjroczqf.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/blog-images/**',
          },
        ],
      }
}

module.exports = nextConfig
