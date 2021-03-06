import React, {Component} from 'react';

import { DialogTitle, DialogContent, Dialog, DialogActions, AppBar, Tabs, Tab } from '@material-ui/core';
import { Button, Slide } from '@material-ui/core';
import PasswordChangeDialog from './passwordChange/passwordChangeDialog.js';

/**
 * @name UserSettingDialog
 * @description Dialog to change user settings.
 *              ALL PROPS WILL BE PASSED DOWN TO <Dialog />
 * @param {String} user Username
 * @param {String} slideDirection : direction that the dialog slides in.
 * @returns {<Dialog />} A '@material-ui/core/Dialog' component
 * @author minhducsun2002
 */

class UserSettingDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab : 0,
            pwdChangeDialogOpen : false
        }
        this.slideIn = this.slideIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    slideIn(props) {
        return <Slide direction={this.props.slideDirection || 'up'} {...props} />;
        // by default the dialog slides upwards
    }   

    handleChange(event, value) {
        this.setState({
            currentTab : value
        })
    }

    render() {
        return (<>
            <Dialog {...this.props} TransitionComponent={this.slideIn}>
                <DialogTitle>
                    User settings {this.props.user ? `for ${this.props.user}` : ''}
                </DialogTitle>
                <DialogContent>
                    <AppBar position="static">
                        <Tabs value={this.state.currentTab} fullWidth
                        onChange={this.handleChange}>
                            <Tab label="Password" />
                        </Tabs>
                    </AppBar>
                    {this.state.currentTab === 0
                    && 
                    <div align="center" style={{marginTop: 10}}>
                        <Button style={{backgroundColor: 'red', color: 'white'}} 
                        onClick={() => this.setState({
                            pwdChangeDialogOpen : true
                        })}>
                            Change your password
                        </Button>
                    </div>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose}>
                        Cancel
                    </Button>
                    <Button onClick={this.submitOptions}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <PasswordChangeDialog open={this.state.pwdChangeDialogOpen} slideDirection="left"
            user={this.props.user} onClose={() => this.setState({
                pwdChangeDialogOpen : false
            })}/>
        </>)
    }
}

export default UserSettingDialog;