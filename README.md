# Wanted Pre Onboarding FE

## 원티드 프리온보딩 프론트앤드 과제

- [원티드 프리온보딩 선밸과제 바로가기](https://github.com/walking-sunset/selection-task)

---

## /home

`Go to Sign in` 버튼을 눌러 로그인 화면으로 이동

![home](/img/home.png)

---

## /signin, /signup

로그인 또는 회원가입을 할 수 있음

![signin](/img/signin.png)
![signup](/img/signup.png)

- 유효성 검사가 통과되지 않으면 버튼 비활성화.
- `회원가입하기`, `로그인하러가기`를 눌러 해당 페이지로 이동.
- 로그인 실패 시 알림 창.  
  ![fail signin](/img//signin2.png)
- 회원가입 실패 시 알림 창.  
  ![fail signup](/img/signup2.png)
- 로그인 및 회원가입 성공시 로컬스토리지에 token 저장 및 /todos로 리다이렉트.  
  ![user token](/img/usertoken.png)

---

## /todos

### todo 등록하기

input에 todo 작성하고 앤터 또는 오른쪽 아이콘 클릭하면 투두가 등록됨

![register todo](/img/registertodo.png)

---

### todo 목록

각각의 투두가 박스 형식으로 나타남

![todo list](/img/todolist.png)

---

### todo 수정하기

- `Eidt` 버튼을 눌러 수정 모드 활성화
- `Cancel` 버튼을 눌르거나 마우스를 밖으로 보내면 수정 모드 비활성화

![todo edit](/img/todoEdit.png)

---

### todo 삭제하기

- `Delete` 버튼을 눌러 삭제

아래는 "투두 등록하기 수정하기" 목록을 삭제한 사진

![todo delete](/img/deleteTodo.png)

---

### todo 완료하기

- 투두 우측 상단에 있는 박스를 눌러 완료하기
- 다시 누르면 미완료로 바뀜

![todo completed](/img/todocom.png)
