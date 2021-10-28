import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:200,
        height:200,
        margin:15,
    },
    creator:{
        color:'lightgray',
        margin:5,
        fontSize:15,
    },
    likes:{
        margin:5,
        fontSize:15,
        color:'lightgray'
    },
    name:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },
    creatorContainer:{
        flexDirection:'row'
    },
    button:{
        backgroundColor:"#1CD05D",
        width:150,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        margin:10,
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        letterSpacing:4,
    }


})

export default styles