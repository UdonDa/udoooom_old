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
    maxWidth: 400,
    paddingTop: "10px",
    margin: "0 auto"
  },
  media: {
    height: 0,
    paddiongTop: "56.25%"
  },
  actions: {
    display: "flex"
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
      <div className={classes.container}>
        <div>自分の備忘録くらいでしかまだ書いてないです</div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="DEIM2018"
            subheader="2018/3"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">初めて学会に行った.</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="http://db-event.jpn.org/deim2018/"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="HackDay"
            subheader="2017/12"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">
              ARKitアプリで靴飛ばすと天気予報がわかる.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/Geeeeeeeeeeeta"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="JP HACKS 2017"
            subheader="2017/9"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">
              舌でやるDDR なのでTTR. 個人的に一番好き
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/TonguesTonguesRevolution"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="IoT＆H/W BIZ DAY 4 by ASCII STARTUP"
            subheader="2017/8"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">
              色々あって参加させてもらえることになった.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="http://eventregist.com/e/IoTASCII4?lang=ja_JP"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="IoT＆H/W BIZ DAY 4 by ASCII STARTUP"
            subheader="2017/8"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">
              色々あって参加させてもらえることになった.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="http://eventregist.com/e/IoTASCII4?lang=ja_JP"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="HackUTokyo2017"
            subheader="2017/8"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">ハンドスピナーIoTを作った.</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="https://github.com/UdonDa/handspinner-iot"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="HackDayIntenal"
            subheader="2017/7"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">
              Yahoo!の社員onlyハッカソンに特別に参加させてもらえた.内容は書けません.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Tokyo IoT Monodukuri College 2017"
            subheader="2017/7"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">椅子を運ぶロボットを作った.</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="https://startuphub.tokyo/magazine/2463"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>

            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="ラーメン二郎ハッカソン"
            subheader="2017/6"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">
              臭気センサーに息を吐き,
              ニンニクが入った二郎を食べた後のニンニク臭をLEDを用いて可視化した.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="https://devpost.com/software/project-zyxri71qsp5m"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>

            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="HackU 電通大"
            subheader="2017/5"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">
              飲み会を楽しくしようとハックした。
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="https://devpost.com/software/paripigrass"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>

            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="hackson" className={classes.avatar}>
                H
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="CodePBL"
            subheader="2016/9"
          />
          <CardMedia className={classes.media} title="fuge" src={HogeLogo}>
            {/* <HogeLogo /> */}
          </CardMedia>
          <CardContent>
            <Typography component="p">
              目覚ましアプリ。アラーム解除に,加速度センサーを用いた玉転がしを用いることで,無理やり腰を起こそうとした.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to fav">
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              href="https://devpost.com/software/smart-alarm-zfypgn"
              target="_blank"
              rel="noopener noreferrer"
            >
              G
            </IconButton>

            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show More"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Hackson
              </Typography>
              <Typography>詳細はGボタンで確認してください.</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Activities.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Activities);