import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@ellucian/react-design-system/core/styles";
import {
  spacing40,
  spacing20
} from "@ellucian/react-design-system/core/styles/tokens";
import {
  Typography,
  Search,
  Button,
  ButtonGroup,
  TextLink,
  IconButton
} from "@ellucian/react-design-system/core";
import { Icon } from "@ellucian/ds-icons/lib";

const customId = "LinkIcon";

const styles = {
  card: {
    marginLeft: spacing40,
    marginRight: spacing40
  },
  toolbar: {
    marginTop: spacing40
  },
  sectionHeaders: {
    paddingTop: spacing20
  },
  buttonSpacing: {
    marginRight: spacing20
  }
};

function SearchCard(props) {
  const {
    classes,
    cardInfo: { configuration }
  } = props;

  const [searchString, setsearchString] = useState("");

  const welcomeMessage = configuration.welcomeMessage || (
    <span style={{ fontWeight: "bold" }}>Search all Library resources!</span>
  );

  const generateSearchUrl = (keywords, ducky = false) => {
    const baseUrl =
      "https://adauniversity.on.worldcat.org/search?databaseList=&queryString=";
    let encodedKeywords = encodeURIComponent(keywords);
    if (ducky) {
      encodedKeywords = `${encodedKeywords}`;
    }
    return `${baseUrl}${encodedKeywords}`;
  };

  const generateUrl = (keywords, ducky = false) => {
    const baseUrl2 =
      "https://adauniversity.on.worldcat.org/advancedsearch?databaseList=";
    let encodedKeywords = encodeURIComponent(keywords);
    if (ducky) {
      encodedKeywords = `${encodedKeywords}`;
    }
    return `${baseUrl2}`;
  };

  const handleClear = () => {
    setsearchString("");
  };

  const handleSearch = (searchValue) => {
    window.open(generateSearchUrl(searchValue));
  };

  const handleAdvanced = (searchValue) => {
    window.open(generateUrl(searchValue, true));
  };

  return (
    <div className={classes.card} id={`${customId}_BasicsContainer`}>
      <Typography>
        <IconButton
          color="gray"
          id={`${customId}_GrayDisabledButton`}
          aria-label="Link"
        >
          <Icon name="link" />
        </IconButton>
        <TextLink
          id={`${customId}_EllucianEnabled`}
          href="https://adauniversity.account.worldcat.org/account/editProfile"
        >
          Library Account
        </TextLink>
      </Typography>
      <Typography>
        <IconButton
          color="gray"
          id={`${customId}_GrayDisabledButton`}
          aria-label="Link"
        >
          <Icon name="link" />
        </IconButton>
        <TextLink
          id={`${customId}_EllucianEnabled`}
          href="https://online.ada.edu.az/appointments/"
        >
          Library Appointments
        </TextLink>
      </Typography>
      <Typography>
        <IconButton
          color="gray"
          id={`${customId}_GrayDisabledButton`}
          aria-label="Link"
        >
          <Icon name="link" />
        </IconButton>
        <TextLink
          id={`${customId}_EllucianEnabled`}
          href="http://online.ada.edu.az/rooms/login?PageID=135"
        >
          Room Reservation
        </TextLink>
      </Typography>
      <Typography gutterBottom>{welcomeMessage}</Typography>
      <Search
        onChange={(e) => setsearchString(e.target.value)}
        value={searchString}
        onClear={handleClear}
        onSearchInvoked={handleSearch}
        fullWidth
      />
      <ButtonGroup className={classes.toolbar}>
        <Button color="primary" onClick={() => handleSearch(searchString)}>
          Search
        </Button>
        <Button color="secondary" onClick={() => handleAdvanced(searchString)}>
          Advanced
        </Button>
      </ButtonGroup>
    </div>
  );
}

SearchCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchCard);
