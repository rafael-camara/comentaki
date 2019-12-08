export const styles = theme => ({
  root: {
    flex: '1 1 auto',
    overflowY: 'auto',
    padding: theme.spacing(4)
  },
  backdrop: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    zIndex: -1,
    position: 'fixed',
    alignItems: 'center',
    touchAction: 'none',
    justifyContent: 'center'
  },
  content: {
    width: '100%',
    height: '100%',
    margin: 0,
    maxWidth: '100%',
    maxHeight: 'none',
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflowY: 'auto'
  }
})
