module.exports = {
    reactStrictMode: false,
    transpilePackages: ["utilities"],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.it',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.youtube.com',
          port: '',
          pathname: '/**',
        },
      ],
      },
    };
  