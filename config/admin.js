module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d1395db868945ae20c9e8e25ce060fb'),
  },
});
