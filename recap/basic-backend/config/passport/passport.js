const passport = require('passport');
const db = require('../../models');
const {Strategy, ExtractJwt} = require('passport-jwt');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // ต้องตรงกับ supersecret ใน controller
  secretOrKey: 'codecamp5',
};

const jwtStrategy = new Strategy(options, async(payload, done) => {
  const user = await db.User.findOne({ id: payload.id })

  if(user) {
    // parameter ตัวแรกคือ error ซึ่งกำหนดว่า null คือไม่ขึ้น error
    // ถ้าไม่ error แล้วพบ user ก็ส่ง user ไป
    done(null, user);
  } else {
    done(null, false);
  }
});

// first parameter ตั้งเอง ไม่ใช่ keyword
// ถ้าจะใช้ก็เอา passport.authenticate('jwt-authentication') ไปใส่ใน route นั้น
passport.use('jwt-authentication', jwtStrategy);