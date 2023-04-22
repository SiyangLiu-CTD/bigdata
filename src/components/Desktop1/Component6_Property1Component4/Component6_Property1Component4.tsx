import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component6_Property1Component4.module.css';
import { RemoveRedEyeIcon } from './RemoveRedEyeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    removeRedEye?: ReactNode;
  };
  text?: {
    emailAddress?: ReactNode;
  };
}
/* @figmaId 5:3 */
export const Component6_Property1Component4: FC<Props> = memo(function Component6_Property1Component4(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle40}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.removeRedEye}>
        {props.swap?.removeRedEye || <RemoveRedEyeIcon className={classes.icon} />}
      </div>
      {props.text?.emailAddress != null ? (
        props.text?.emailAddress
      ) : (
        <div className={classes.emailAddress}>Email address</div>
      )}
      <div className={classes.password}>Password</div>
    </div>
  );
});
