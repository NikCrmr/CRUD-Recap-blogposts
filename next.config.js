/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["unsplash.com", "puijo.files.wordpress.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "puijo.files.wordpress.com",
        port: "",
        pathname: "/2020/05/img_7272.jpg",
      },
      {
        protocol: "https",
        hostname: "puijo.files.wordpress.com",
        port: "",
        pathname: "/2014/05/dscn0495.jpg",
      },
      {
        protocol: "https",
        hostname: "puijoslivinglove.files.wordpress.com",
        port: "",
        pathname: "/2013/07/p1050483.jpg",
      },
      {
        protocol: "https",
        hostname: "puijoslivinglove.files.wordpress.com",
        port: "",
        pathname: "/2013/07/p1050494.jpg",
      },
      {
        protocol: "https",
        hostname: "puijoslivinglove.files.wordpress.com",
        port: "",
        pathname: "/2013/07/p1050392.jpg",
      },
      {
        protocol: "https",
        hostname: "puijoslivinglove.files.wordpress.com",
        port: "",
        pathname: "/2013/03/love.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
