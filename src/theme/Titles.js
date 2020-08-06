import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  titulo: {
    color: theme.palette.primary.main,
  },
  subtitulo: {
    color: theme.palette.primary.light,
  },
}));
export default useStyles;
