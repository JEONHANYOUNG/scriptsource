//아이디 유효성 검증
//영어 대소문자, 숫자만 허용, 6~12
function idCheck(userid) {
  let regId = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}$/;

  //userid 사용자 입력값 가져오기
  //let userid = document.querySelector("#userid").value;
  //유효성 검증 - 메세지 가져오기

  if (!regId.test(userid)) {
    alert("아이디를 확인해 주세요");
    document.querySelector("#userid").select();
    return;
  }
}

//비밀번호 유효성 검증
//영어 대소문자, 숫자, 특수문자 허용, 8~15
function passwordCheck(password) {
  let regPwd = /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@$*])[A-Za-z\d!@$*]{8,15}$/;

  return regPwd.test(password);
  //비밀번호 가져오기
}

//비밀번호 확인 유효성 검증
//영어 대소문자, 숫자, 특수문자 허용, 8~15
function pwdCheck1(password) {
  //비밀번호 가져오기
  if (!passwordCheck(password.value)) {
    //유효성 검증 - 메세지 띄우기
    alert("비밀번호는 숫자,문자,특수문자를 포함하여 8~15자로 작성해야 합니다.");
    password.select();
    return;
  }
}
function pwdCheck2(password) {
  if (!passwordCheck(password.value)) {
    alert("비밀번호는 숫자,문자,특수문자를 포함하여 8~15자로 작성해야 합니다.");
    password.select();
    return;
  }
  if (document.querySelector("#userpw").value !== password.value) {
    alert("이전 비밀번호와 다릅니다.");
    password.select();
    return;
  }
}

// 성별 : 둘 중 무조건 하나 선택
function genderCheck(gender) {
  // 제일 첫번째 요소
  // let gender = document.querySelector("[name='gender']");
  //if (!gender.checked) {
  //    alert("성별을 확인해 주세요");
  // }
  let genders = document.querySelectorAll("[name='gender']");
  genders.forEach((element) => {
    //for문을 가장 간단한 방법으로 돌리는 것은 forEach
    //console.log(element);
    if (!element.checked) {
      alert(element.value);
    }
  });
}

// 이메일 :
function emailCheck(email) {
  const reg = /\w+@[A-Za-z]+\.(com|erg|edu|ent)/;

  if (!reg.test(email)) {
    alert("이메일 형식을 확인해 주세요.");
    email.select();
    return;
  }
}

//핸드폰 번호 : 000-0000-0000 규칙
function mobileCheck(mobile) {
  const reg = /^\d{3}-\d{4}-\d{4}$/;

  if (!reg.test(mobile.value)) {
    alert("핸드폰 형식을 확인해 주세요.");
    mobile.select();
    return;
  }
}
