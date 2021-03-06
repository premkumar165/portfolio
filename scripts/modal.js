$(document).ready(function(){

  // MODAL
  var modalText = {
    roambi: {
      title: 'http://urc.marssociety.org/home/team-info',
      tag: 'MARS ROVER CHALLENGE.',
      detail: 'Design and build the next generation of Mars rovers that will one day work alongside human explorers in the field. Swipe / Drag on the images to view more',
      link: 'https://uwaterloo.ca/sedra-student-design-centre/events/2018-university-rover-challenge'
    },
    walker: {
      title: 'Design of Hydrogen storage tank for Toyota prius using lithium alanate',
      tag: 'SUSTAINABLE ENERGY.',
      detail: 'Energy is defined as the only important technological challenge faced by the humankind today. With energy, we are in the centre of doing big experiments that no one has ever done before. If we do not get the experiments right, as said in the language of physics, the world will not be the same ever.',
      link: 'https://drive.google.com/open?id=19cDuTxk7B2w5rFffK7o_dGS1zo22lvAS'
    },
    powur: {
      title: 'Design Portfolio',
      tag: 'PROJECTS SHOWCASE.',
      detail: 'A detailed portfolio of design projects undertaken and currently in-progress.',
      link: 'https://premkumar165.github.io/DesignPortfolio'
    },
    mystand: {
      title: 'Fabrication and Experimental Heat Transfer Enhancement Techniques',
      tag: 'HEAT TRANSFER ENHANCEMENT',
      detail: 'Various heat enhancement techniques are identified and studied for double pipe heat exchangers. Experimental evaluation is done by fabricating basic double pipe heat exchanger with modifications. The material used for the construction of heat exchanger is copper, owing to its high thermal conductivity.',
      link: 'https://www.ijser.org/researchpaper/Fabrication-Experimental-Evaluation-of-Heat-Transfer-Enhancement-Techniques-in-Heat-Exchangers.pdf'
	},
    never: {
      title: 'GMSH',
      tag: 'MESH GENERATION.',
      detail: 'Gmsh is a finite-element mesh generator and supports parametric input and has advanced visualization mechanisms.Gmsh supports full constructive solid geometry features, based on Open Cascade Technology',
    },
    themall: {
      title: 'Google-Fusion-Tables',
      tag: 'INFLUENZA VACCINE HESITANCY DISTRIBUTION.',
      detail: 'Primarily, a google fusion table data of all the postal codes in the province of ontario was obtained from the canadian postal department, and the data was cleaned to represent only the first 3 digits of the code (xxx), and were compared from the data obtained by a survey, and the respondents postal code was sorted according to the respective city. After that, the data is utilized in a google map API to plot the distribution.',
      link: 'https://premkumar165.github.io/Google-Fusion-Tables/'
	}
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/" + id + '-' + index + ".webp') center center/cover",
		
		//iframe('https://www.beautiful.ai/player/-LgAObovcPeCbPPda5Wd/BE-605')
        backgroundSize: 'cover'
      });
              
    });
  }
})

