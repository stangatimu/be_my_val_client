import { makeStyles } from '@material-ui/styles';


// background image
import bmv_bg from "../assets/bmv_bg.jpg";

let colors = {
    red:"#bd3625",
    text_color:"#232323"
}

const useStyles = makeStyles({
    root:{
        backgroundImage:`url(${bmv_bg})`,
        minHeight: "100vh",
        backgroundSize: "contain",
        overflowX:"hidden"
    },
    content:{
        background:"#fff",
        minHeight:"15vh",
        borderTopLeftRadius: "60% 30%",
        borderTopRightRadius: "60% 30%",
        minWidth:"120%",
        padding:"0 11%",
    },
    golden_ring_home:{
        marginBottom:"-10px",
        width:"100px",
        height:"160px"
    },
    caption:{
        color:"white",
        fontSize:"1.3em",
        fontWeight:"bold"
    },
    welcome_message:{
        fontSize:"2.1em",
        marginTop:"30px",
        fontFamily: "'Satisfy', cursive"
    },
    button:{
        backgroundColor:colors.red,
        color:"white !important",
        "& a":{
            color:"white",
            textDecoration:"none"
        }
    },
    input:{
        marginBottom:"25px"
    },
    form:{
        width:"90%",
        margin:"0 auto"
    },
    alert:{
        borderRadius: "5px",
        lineHeight: ".9em",
        width:"90%",
        padding: "10px",
        margin:"10px auto"
    },
    error:{
        backgroundColor: "#cea0a4",
        color: "#721c24 !important",
    },
    success:{
        color: "#155724 !important",
        backgroundColor: "#d4edda",
        borderColor: "#c3e6cb",
    },
    invitation_link:{
        color:colors.red,
        fontSize:"1.3em",
        fontStyle:"italic"
    }
});

export default useStyles;