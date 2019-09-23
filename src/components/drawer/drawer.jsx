import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Settings from '@material-ui/icons/Settings';
import History from '@material-ui/icons/History';
import Calendar from '@material-ui/icons/CalendarToday';
import Description from '@material-ui/icons/Description';
import Gavel from '@material-ui/icons/Gavel';
import Folder from '@material-ui/icons/Folder';
import TrendingUp from '@material-ui/icons/TrendingUp';
import HowToReg from '@material-ui/icons/HowToReg';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: "#008080"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        background: "#008080"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    //
    const [openCollapse1, setOpenCollapse1] = React.useState(false);
    function handleOpenSettings1() {
        setOpenCollapse1(!openCollapse1);
    }

    const [openCollapse2, setOpenCollapse2] = React.useState(false);
    function handleOpenSettings2() {
        setOpenCollapse2(!openCollapse2);
    }

    const [openCollapse3, setOpenCollapse3] = React.useState(false);
    function handleOpenSettings3() {
        setOpenCollapse3(!openCollapse3);
    }

    const [openCollapse4, setOpenCollapse4] = React.useState(false);
    function handleOpenSettings4() {
        setOpenCollapse4(!openCollapse4);
    }

    const [openCollapse5, setOpenCollapse5] = React.useState(false);
    function handleOpenSettings5() {
        setOpenCollapse5(!openCollapse5);
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Gestão em Segurança do Trabalho e Saúde Ocupacional
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>

                    <ListItem button onClick={handleOpenSettings1}>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText primary="Histórico do Empregado" />
                        {openCollapse1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCollapse1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Vencimento ASO" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Cópia ASO" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Copia de Atestado" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />

                    <ListItem button onClick={handleOpenSettings2}>
                        <ListItemIcon>
                            <HowToReg />
                        </ListItemIcon>
                        <ListItemText primary="Treinamentos" />
                        {openCollapse2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCollapse2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Novo Treinamento" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Cópias Certificados" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />

                    <ListItem button onClick={handleOpenSettings3}>
                        <ListItemIcon>
                            <Gavel />
                        </ListItemIcon>
                        <ListItemText primary="Auditorias, Inspeções e Atas" />
                        {openCollapse3 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCollapse3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="SRA" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Comportamental" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Notificações" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Desvios de segurança" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Teste de Fumaça" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Atas de Reuniões" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />
                    
                    <ListItem button onClick={handleOpenSettings5}>
                        <ListItemIcon>
                            <TrendingUp />
                        </ListItemIcon>
                        <ListItemText primary="Procedimentos, AST/ART" />
                        {openCollapse5 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCollapse5} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="Procedimentos Operacionais" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="AST/ART" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />

                    <ListItem button key="Ficha de EPI">
                        <ListItemIcon><Folder /></ListItemIcon>
                        <ListItemText primary="Ficha de EPI" />
                    </ListItem>
                    <Divider />

                    <ListItem button key="Ações de cronograma">
                        <ListItemIcon><Calendar /></ListItemIcon>
                        <ListItemText primary="Ações de cronograma" />
                    </ListItem>
                    <Divider />


                    <ListItem button onClick={handleOpenSettings4}>
                        <ListItemIcon>
                            <Description />
                        </ListItemIcon>
                        <ListItemText primary="Programas Legais" />
                        {openCollapse4 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCollapse4} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="PPRA" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="PGR" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="PCMAT" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="PCMSO" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="PPR" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="PCA Auditivo" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider />

                    <ListItem button key="CIPA e CIPAMIN">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="CIPA e CIPAMIN" />
                    </ListItem>
                    <Divider />



                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
        </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
            </main>
        </div>
    );
}