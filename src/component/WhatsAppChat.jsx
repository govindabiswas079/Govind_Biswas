import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import profile from '../img/myimg.jpg'

const WhatsAppChat = () => {
    return (
        <div>
            <WhatsAppWidget
                phoneNo="919511723507"
                position="right"
                widgetWidth="300px"
                widgetWidthMobile="260px"
                /* autoOpen={false}
                autoOpenTimer={5000}
                messageBox={false} */
                messageBoxTxt="Hi Team, is there any related service available ?"
                iconSize="40"
                iconColor="white"
                iconBgColor="#38f708"
                headerIcon="https://proficientdesigners.in/wp-content/themes/pd/img/logo-new.png"
                headerIconColor="pink"
                headerTxtColor="black"
                headerBgColor="#1e7aab"
                headerTitle="Prem Biswas"
                headerCaption="Online"
                bodyBgColor="#bbb"
                chatPersonName="Support"
                chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
                footerBgColor="#999"
                btnBgColor="blue"
                btnTxtColor="black"
            />
        </div>
    )
}

export default WhatsAppChat
