import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HogeLogo from "./images/twitter.png";
import GithubIcon from "@material-ui/icons/WbIridescent";

const styles = theme => ({
  card: {
    maxWidth: 1200,
    paddingTop: "10px",
    margin: "0 auto"
  },
  media: {
    height: 0,
    paddiongTop: "56.25%"
  },
  actions: {
    display: "flex",
    maxWidth:1000
  },
  expand: {
    transform: "rotate(0deg)",
    transitions: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  container: {
    display: "block",
    justifyContent: "center"
  }
});

class Activities extends React.Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography component="h2" variant="h1" gutterBottom className={classes.card}>
        Publications
        </Typography>

        <Card className={classes.card}>
          <CardHeader
            title="MADIMA 2018 workshop"
            subheader="2018/7"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            <b>Daichi Horita</b>, Ryosuke Tanno, Wataru Shimoda and Keiji Yanai: Food Category Transfer with Conditional Cycle GAN and a Large-scale Food Image Dataset, Proc. of International Workshop on Multimedia Assisted Dietary Management (MADIMA), Stockholm, Sweden (2018/07).
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <li>
            <IconButton
              aria-label="share"
              href="http://madima.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Info
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="ACM MultiMedia 2018"
            subheader="2018/10"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            Ryosuke Tanno, <b>Daichi Horita</b>, Wataru Shimoda and Keiji Yanai: Magical Rice Bowl: Real-time Food Category Changer, Proc. of ACM Multimedia, Seoul, Korea (2018/10) (Demo paper).
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <li>
            <IconButton
              aria-label="share"
              href="http://www.acmmm.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Info
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="VRST 2018"
            subheader="2018/11"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            <b>Daichi Horita</b>, Jaehyeong Cho, Takumi Ege, Keiji Yanai: CNN-based Photo Transformation for Improving Attractiveness of Ramen Photos, ACM Symposium on Virtual Reality Software and Technology (VRST), Tokyo, Japan (2018/11). (Poster paper)
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <li>
            <IconButton
              aria-label="share"
              href="https://vrst.acm.org/vrst2018/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Info
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="NIPS 2018 workshop"
            subheader="2018/12"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            Yuki Izumi, <b>Daichi Horita</b>, Ryosuke Tanno and Keiji Yanai: Real-Time Image Classification and Transformation Apps on iOS by “Chainer2MPSNNGraph”, NIPS 2018 Workshop on Machine Learning on the Phone and other Consumer Devices (MLPCD), Motreal, Canada (2018/12).
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <li>
            <IconButton
              aria-label="share"
              href="https://sites.google.com/view/nips-2018-on-device-ml/venue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Info
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Typography component="h2" variant="h1" gutterBottom className={classes.title}>
          Hacksons in Japan.
        </Typography>

        <Card className={classes.card}>
          <CardHeader
            title="SPAJAM Hackson in Tokyo Qualification A"
            subheader="2018/5"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            Laravel (php) as the backend and iOS application as the front end, I created an application to thorow money.
            We was awarded the Excellence Award.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <li>
            <IconButton
              aria-label="share"
              href="https://github.com/nirakka/spajam_api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="Puripara Hackson"
            subheader="2018/5"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            Using Flask (Python) as the backend and LINEBot as the front end, I made a search bot for setting up the Puripara and Purichan.
            </Typography>
          </CardContent>
          
          <CardActions className={classes.actions} disableActionSpacing>
            <li>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/parajuku-ls"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </IconButton>
            </li>

          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="POL.inc Hackson"
            subheader="2018/4"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            I created unmanned convenience store software that uses Node.js (JavaScript) as the backend and LINEBot as the front end and uses LINE pay as a paying way.
            </Typography>
          </CardContent>
          
          <CardActions className={classes.actions} disableActionSpacing>
            <li>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/LaboEleven"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </IconButton>
            </li>

          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="HackDay"
            subheader="2017/12"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            We made an app to throw shoes at AR.
            </Typography>
          </CardContent>
          
          <CardActions className={classes.actions} disableActionSpacing>
            <li>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/Geeeeeeeeeeeta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="JP Hacks"
            subheader="2017/11"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            We used OpenCV image recognition to recognize the tongue and created a music game that operates by moving the tongue by Unity.
            </Typography>
          </CardContent>
          
          <CardActions className={classes.actions} disableActionSpacing>
            <li>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/TonguesTonguesRevolution"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="HackU Tokyo"
            subheader="2017/8"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            By using the hands spinner, we made a system that can retrieve eating places from the distance calculated from arbitrary direction and rotation number.
            </Typography>
          </CardContent>
          
          <CardActions className={classes.actions} disableActionSpacing>
            <li>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/handspinner-iot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="Ramen Jiro Hackson"
            subheader="2017/6"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            We made a system to detect and notify the smell of garlic by breathing out.
            </Typography>
          </CardContent>
          
          <CardActions className={classes.actions} disableActionSpacing>
            <li>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/RamenZirouHackson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </IconButton>
            </li>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="HackU in UEC Tokyo"
            subheader="2017/6"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
          </CardMedia>
          <CardContent>
            <Typography component="p">
            We created an IoT device to be attached to a beer glass.The color of the LED changes when toasting due to acceleration and collision detection.
            </Typography>
          </CardContent>
          
          <CardActions className={classes.actions} disableActionSpacing>
            <li>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/HackU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </IconButton>
            </li>
          </CardActions>
        </Card>
        
        
        </div>
    );
  }
}

Activities.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Activities);