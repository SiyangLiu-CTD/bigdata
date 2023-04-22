import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component6_Property1Component4 } from './Component6_Property1Component4/Component6_Property1Component4';
import classes from './Desktop1.module.css';
import { RemoveRedEyeIcon } from './RemoveRedEyeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes._12980478_50974101}></div>
      <div className={classes.rectangle42}></div>
      <div className={classes.signIn}>Sign in</div>
      <Component6_Property1Component4
        className={classes.component6}
        swap={{
          removeRedEye: <RemoveRedEyeIcon className={classes.icon} />,
        }}
        text={{
          emailAddress: <div className={classes.emailAddress}>Username </div>,
        }}
      />
      <div className={classes.userLogin}>User Login</div>
      <div className={classes.rectangle43}></div>
      <div className={classes.rememberMe}>Remember me</div>
      <div className={classes.forgotPassword}>Forgot password?</div>
      <div className={classes.newHereCreateAnAccount}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>New here? </span>
          <span className={classes.label2}>Create an Account</span>
        </p>
      </div>
      <div className={classes.autoMLWebsite}>Auto ML Website</div>
    </div>
  );
});
