var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });
  
const trailData  = {
    Pinachevo: {
      title: 'Пиначево',
      content: 'Информация о тропе',
    },
    Dzendzur: {
        title: 'Вулкан Дзендзур',
        content: 'Информация о тропе',
      },
    Avachinsky: {
      title: 'Авачинский',
      content: 'Информация о тропе',
    },
    ViluchinskiyVodopad: {
        title: 'Вилючинский водопад',
        content: 'Информация о тропе',
      },
      ViluchinskyVulkan: {
        title: 'Вилючинский вулкан',
        content: 'Информация о тропе',
      },
      VulkanGorelyi: {
        title: 'Вулкан Горелый',
        content: 'Информация о тропе',
      },
      KanuonOpasnyi: {
        title: 'Каньон Опасный',
        content: 'Информация о тропе',
      },
      PionerskaySopka: {
        title: 'Пионерская сопка',
        content: 'Информация о тропе',
      },
      OzeroIkar: {
        title: 'Озеро Икар',
        content: 'Информация о тропе',
      },
      PloskiyTolbachik: {
        title: 'Плоский Толбачик',
        content: 'Информация о тропе',
      },
      VokrugTolbachikov: {
        title: 'Вокруг Толбачиков',
        content: 'Информация о тропе',
      },
  };

function showTrailInfo(trailKey) {
    const trailInfoTitle = document.getElementById("trail-info-title");
    const trailInfoContent = document.getElementById("trail-info-content");

    if (trailData[trailKey]) {
        trailInfoTitle.textContent = trailData[trailKey].title;
        trailInfoContent.textContent = trailData[trailKey].content;
    } else {
        trailInfoTitle.textContent = "Выберите тропу, чтобы увидеть информацию";
        trailInfoContent.textContent = "";
    }
}