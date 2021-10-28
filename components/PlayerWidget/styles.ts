import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
    container:{
       position:'absolute',
       bottom:50,
       backgroundColor:"#131313",
       flexDirection:'row',
       width:'100%',
       borderBottomWidth:3,
       borderBottomColor:'black',
       alignItems:'center'
    },
    image:{
        width:70,
        height:70,
        marginRight:10,
    },
    title:{
        color:'white',
        fontSize:18,
       
    },
    artist:{
        color:'lightgray',
        fontSize:18,
    },
    infoIconWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
    },
    iconsContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:100,
    },
    infoContainer:{
        justifyContent:'space-around',
        flexDirection:'row',
    }


})

export default styles