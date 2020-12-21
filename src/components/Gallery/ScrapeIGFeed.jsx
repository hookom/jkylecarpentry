import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent } from '@material-ui/core';
import Loading from '../Common/Loading';
import { openLink } from '../../lib/utils';

const useStyles = makeStyles(() => ({
  container: {
    padding: '30px 60px',
  },
  imageCard: {
    height: 400,
    width: 400,
  },
  postImage: {
    cursor: 'pointer',
    height: 400,
    width: 400,
  },
}));

const ScrapeIGFeed = ({username, limit}) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (username && limit && media.length === 0) {
      setLoading(true);
      fetch(`https://www.instagram.com/${username}/`)
        .then(res => res.text())
        .then(body => {
          const json = getJSON(body);
          const media = mapMedia(json);

          setMedia(media.slice(0, limit));
        })
        .catch(e => {
          console.log(e);
        }).finally(() => {
          setLoading(false);
        });
    }
  }, [username, limit, media]);

  return (
    <div className={classes.container}>
      { loading ? <Loading /> :
          <Grid container justify='center' spacing={3}>
            {
              media.map((media, index) =>
                <Grid item key={index}>
                  <Card className={classes.imageCard}>
                    <CardContent onClick={() => openLink(media.url)}>
                      <img src={media.src} className={classes.postImage} alt={media.alt}></img>
                    </CardContent>
                  </Card>
                </Grid>
              )
            }
          </Grid>
      }
    </div>
  );
}

const getJSON = (body) => {
  try {
    const data = body
      .split("window._sharedData = ")[1]
      .split("</script>")[0];
    return JSON.parse(data.substr(0, data.length - 1));
  } catch (err) {
    throw Error("cannot parse response body");
  }
};

const mapMedia = (json) => {
  try {
    const src = (node) => {
      switch (node.__typename) {
        case "GraphVideo":
          return node.thumbnail_src;
        case "GraphSidecar":
        default:
          const index = node.thumbnail_resources
            .findIndex(item => item.config_width === 640) || 4;
          return node.thumbnail_resources[index].src;
      }
    };

    const alt = (node) => {
      if (
        node.edge_media_to_caption.edges[0] &&
        node.edge_media_to_caption.edges[0].node
      ) {
        return node.edge_media_to_caption.edges[0].node.text;
      } else if (node.accessibility_caption) {
        return node.accessibility_caption;
      } else {
        return "";
      }
    };

    const edges =
      json.entry_data.ProfilePage[0].graphql.user
        .edge_owner_to_timeline_media.edges;

    return edges.map((edge) => {
      return {
        alt: alt(edge.node),
        url: `https://www.instagram.com/p/${edge.node.shortcode}`,
        src: src(edge.node),
      };
    });
  } catch (err) {
    throw Error("cannot map media array");
  }
};

export default ScrapeIGFeed;
