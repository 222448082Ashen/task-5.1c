import React from 'react';
import { Grid, List, Icon } from 'semantic-ui-react';

const FooterComponent = () => {
  return (
    <footer>
      <div style={{ padding: '25px 115px', backgroundColor: '#aabbdd' }}>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <h4>Explore</h4>
              <List>
                <List.Item>Home</List.Item>
                <List.Item>Questions</List.Item>
                <List.Item>Articles</List.Item>
                <List.Item>Tutorials</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <h4>Support</h4>
              <List>
                <List.Item>FAQs</List.Item>
                <List.Item>Help</List.Item>
                <List.Item>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <h4>Stay Connected</h4>
              <List horizontal>
                <List.Item><Icon name='linkedin' /></List.Item>
                <List.Item><Icon name='facebook' /></List.Item>
                <List.Item><Icon name='instagram' /></List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <h3>DEV@Deakin</h3>
        </div>
        <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
          <a href='#'>Privacy Policy</a> &nbsp; | &nbsp;
          <a href='#'>Terms of Service</a> &nbsp; | &nbsp;
          <a href='#'>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
