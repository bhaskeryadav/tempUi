import {useEffect} from 'react';
import * as io from "socket.io-client";
// https://api.wikiaboutme.org/

const useMessageChannel = () => {
   console.log("rendering socket channel");
    var socket =   io.connect(
        'https://api.wikiaboutme.org/',
        {
          transports: ["websocket", "xhr-polling"],
          query: { from: 'redbox' }
        }
      );

      
    const validateSocketConnection = () => {
       // console.log('sending...',localStorage.getItem("x-auth"));       
        socket.emit('validateToken', {token: localStorage.getItem("x-auth")});
      }
      
    socket.on('connect', () => {
      //  console.log("got connect",localStorage.getItem("x-auth"));
        validateSocketConnection();
      });
  
    socket.on('disconnect', () => {
      //  console.log("got disconnect");
        socket.connect();
      });

    const onMessageRecieved = (callBackFunc) => socket && socket.on("broadcastMsg",callBackFunc);



        
          
  

    return {onMessageRecieved};

}

export default useMessageChannel;

