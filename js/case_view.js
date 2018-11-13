$(function(){

  //메인 비쥬얼 배너 슬라이드
  $('.visual_slide_wrap').bxSlider({
    auto: true,
    mode: 'fade',
    autoControls: true,
    stopAutoOnClick: true,
    captions: true,
    controls:false,
    slideWidth: 1200,
    speed:500
  });

  $('.story_slide_wrap').bxSlider({
    auto: true,
    mode: 'vertical',
    autoControls: true,
    stopAutoOnClick: true,
    captions: true,
    controls: true,
    slideWidth: 300,
    pager:false,
    speed:500
  });

  //공지사항 탭
  $('.tab_category .btn_tab').click(function(e){
    e.preventDefault();
    var selectTabState = $(this).parents('.tab_item').hasClass('is_selected');
    var targetSectionId = $(this).attr('href').split('#')[1];
    var $targetSection = document.getElementById(targetSectionId);
    if(!selectTabState){
      $(this).parents('.tab_item').addClass('is_selected').siblings('.tab_item').removeClass('is_selected');
      $($targetSection).show().siblings('.tab_section').hide();
    }
  });

  //인풋
  $('.inp_area .inp_txt').click(function(e){
    //e.preventDefault();
    e.stopPropagation();
    $(this).parents('.inp_area').addClass('is_focus');
  });

  //인풋_다른곳 클릭시
  $('.wrap').click(function(e) {
    //e.stopPropagation();
    if($('.inp_area .inp_txt').val()){
      return;
    }
    $('.inp_area').removeClass('is_focus');
  });

  //사이트 펼치기
  $('.side_menu_item .side_menu_link').click(function(e){
    e.preventDefault();
    $(this).parents('.side_menu_item').find('.sel_bx ').toggleClass('is_show');
  });


  


});