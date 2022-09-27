//  1. 작은 이미지 큰 이미지로 보이게끔

let bigPhoto = document.querySelector('#photo > img');
// console.log(bigPhoto);

let list_zone = document.querySelector('#inner_list');
let ul_li = list_zone.children;
// console.log(ul_li); // HTMLCollection(8)
ul_li = [...ul_li];
ul_li.map((e) => {
  let aTag = e.querySelector('a');
  aTag.onclick = (e) => {
    bigPhoto.src = aTag.href;
    return false;
  };
});

// 2. 다음( > ) 버튼을 클릭할 때 마다 <li>가  -100만큼 이동하게 한다.

let m_num = 0;
let b_btn = document.querySelector('#next_btn');
b_btn.onclick = (e) => {
  if (m_num >= ul_li.length - 3) return false; // 이 부분 궁금
  m_num++;
  list_zone.style.marginLeft = -100 * m_num + 'px';
  return false;
};

// 3. 이전 ( < ) 버튼을 클릭할 때 마다 <li>가 100만큼 이동하게 한다.

let before_btn = document.querySelector('#before_btn');
before_btn.onclick = (e) => {
  if (m_num <= 0) return false;
  m_num--;
  list_zone.style.marginLeft = -100 * m_num + 'px';
  return false;
};
