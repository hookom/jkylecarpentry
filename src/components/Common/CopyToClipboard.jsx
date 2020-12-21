import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(() => ({
  copyIcon: {
    paddingLeft: 10,
    cursor: 'pointer',
  },
  copiedIndicator: {
    verticalAlign: 'top',
    fontStyle: 'italic',
    fontSize: 'xx-small',
    position: 'absolute',
    left: 'calc(50% + 135px)',
  },
}));

const CopyToClipboard = ({target}) => {
  const classes = useStyles();
  const [isCopied, setIsCopied] = useState(false);

  const copySecret = () => {
    navigator.clipboard.writeText(target);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <React.Fragment>
      <span>
        <FontAwesomeIcon icon={faCopy} onClick={copySecret} className={classes.copyIcon} />
      </span>
      { isCopied && <span className={`${classes.copiedIndicator} cqXXSmallText`}>copied</span> }
    </React.Fragment>
  );
};

export default CopyToClipboard;
