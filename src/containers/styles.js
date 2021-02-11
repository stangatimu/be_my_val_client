import { makeStyles } from '@material-ui/styles';


// background image
import bmv_bg from "../assets/bmv_bg.jpg";

let colors = {
    red:"#bd3625",
    text_color:"#232323",
    bg_red:"#852317"
}

const useStyles = makeStyles({
    root:{
        backgroundImage:`url(${bmv_bg})`,
        minHeight: "100vh",
        backgroundRepeat:"repeat-x",
        backgroundColor:colors.bg_red,
        backgroundSize: "contain",
        overflowX:"hidden"
    },
    content:{
        background:"#fff",
        borderRadius:"4px",
        width:"400px",
        maxWidth:"90%",
        padding:"7% 11%",
    },
    form_content:{
        padding:"4% 0% !important"
    },
    golden_ring_home:{
        marginBottom:"-10px",
        width:"100px",
        height:"120px"
    },
    caption:{
        color:"white",
        fontSize:"1.3em",
        fontWeight:"bold"
    },
    welcome_message:{
        fontSize:"1.8em",
        lineHeight:"1.2em",
        marginTop:"10px",
        fontFamily: "'Satisfy', cursive"
    },
    button:{
        backgroundColor:colors.red,
        margin:"10px auto",
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
        maxWidth:"500px",
        margin:"0 auto"
    },
    alert:{
        borderRadius: "5px",
        textAlign: "center",
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
        fontSize:"1.1em",
        fontStyle:"italic"
    },
    recepient_name:{
        fontFamily:"'Satisfy', cursive",
        margin:"10px 0",
        fontWeight:"100",
        fontSize:"2em",
        paddingLeft:"5px"
    },
    sent_invitation_name:{
        fontFamily:"'Satisfy', cursive",
        fontWeight:"bold",
        fontSize:"1.6"
    }
});

export default useStyles;