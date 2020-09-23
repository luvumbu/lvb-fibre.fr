var header = new Vue({
  el: '#header',
  data: {
    header_top_class:"header_top_class",
    header1:"Accueil",
    header2:"Société",
    header3:"WiFi",   
    header4:"Réseau",  
    header5:"Câblage",  
    header6:"Contact",
    h1_header:"La société LVB-FIBRE",

    header1_class:"responsive_full",
    header2_class:"responsive_full",
    header3_class:"responsive_full",   
    header4_class:"responsive_full",  
    header5_class:"responsive_full",  
    header6_class:"responsive_full",

    click_responsive:"display_none",
    source_logo:"https://pbs.twimg.com/profile_images/1244325575659061249/YjvhVutG.jpg",
    source_logo_class:"source_logo_class",
    separation:"",



    h1_header_class:"",
  },
  methods: {
    header_logo:function(){
 
    },
    header_menu:function(){

      if(this.click_responsive=="display_none"){
        this.click_responsive="click_responsive";
        this.separation="separation";
      }
      else{
        this.click_responsive="click_responsive";
        this.click_responsive="display_none";
        this.separation="";
      }
 
    },
    header1_fuction:function(){
 
    },
    header2_fuction:function(){
 
    },
    header3_fuction:function(){
 
    },
    header4_fuction:function(){
 
    },
    header5_fuction:function(){
 
    },
    header6_fuction:function(){
 
    },





 
  }
})