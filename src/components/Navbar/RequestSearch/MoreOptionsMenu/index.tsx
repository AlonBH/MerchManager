import React from 'react';
import { IconButton } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';

import Dropdown from '../../../shared/Dropdown';
import * as paths from '../../../../consts/paths';

const moreOptionsMenu = [
  { name: 'יצירת בקשה חדשה', link: paths.NEW_REQUEST },
  { name: 'ניהול ישויות', link: paths.MANAGE_ENTITIES },
  { name: 'ישויות בתחקור', link: paths.ENTITIES_UNDER_INVESTIGATION },
  { name: 'ניהול הרשאות', link: paths.MANAGE_PERMISSIONS },
  { name: 'יצירת תיאום', link: paths.NEW_SCHEDULE },
  { name: 'דוחות', link: paths.REPORTS },
];

const MoreOptionsMenu = () => {
  return (
    <Dropdown items={moreOptionsMenu}>
      <IconButton>
        <MoreVert />
      </IconButton>
    </Dropdown>
  );
};

export default MoreOptionsMenu;
