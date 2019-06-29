import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  logoBusride: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0
  },
  logoLink: {
    fontSize: 0
  },
  logoImage: {
    cursor: 'pointer',
    width: '160px',
    height: '60px'
  },
  logoDivider: {
    marginBottom: theme.spacing(1.5)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: '100px',
    height: '100px'
  },
  nameText: {
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginTop: theme.spacing(2)
  },
  bioText: {
    color: theme.palette.text.secondary
  },
  profileDivider: {
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(1)
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey[150],
      borderLeft: '5px solid #4D92C8',
      borderRadius: '2px',
      '& $listItemIcon': {
        color: '#4D92C8',
        marginLeft: '-5px'
      }
    },
    '& + &': {
      marginTop: theme.spacing()
    }
  },
  activeListItem: {
    borderLeft: '5px solid #4D92C8',
    borderRadius: '2px',
    backgroundColor: theme.palette.grey[150],
    '& $listItemText': {
      color: theme.palette.text.primary,
      fontWeight: '550'
    },
    '& $listItemIcon': {
      color: '#4D92C8',
      marginLeft: '-5px',
    }
  },
  listItemIcon: {
    marginRight: -20
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
}));
