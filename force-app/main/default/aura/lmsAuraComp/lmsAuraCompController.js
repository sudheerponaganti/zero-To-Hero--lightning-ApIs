({
    handleMessage : function(component,message) {
  if(message!= null && message.getParam("lmsData")!= null){
    let subscription = component.get("v.subscriptionRef");
    // console.log(subscription)
     if(subscription != 'unsubscribed'){
      subscription = component.set("v.messageReceived",message.getParam("lmsData"))
      component.set("v.subscriptionRef",subscription)
    }
   
  }
    },
    inputHandler:function(component,event){
        component.set("v.messageInputValue",event.target.value)
    },
    pubisHandler : function(component){
        let msg = {lmsData : component.get("v.messageInputValue")}
        component.find("CommunicationChannelId").publish(msg)
    },
    unsubscribeHandler:function(component){
      let subscribedRef = component.get("v.subscriptionRef")
      // console.log(subscribedRef)
      component.find("CommunicationChannelId").unsubscribe(subscribedRef)
      let msg = 'unsubscribed'
      component.set("v.subscriptionRef",msg)
    }
})
