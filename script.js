document.addEventListener("DOMContentLoaded",
    function(e){
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent=prompt("새로운 아이디를 입력하세요")
            })
    

        let profileEditButton = document.querySelector("#profile_info button")    
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#summary") 
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false

    profileEditButton.addEventListener("click",
        function(e) {
            if(changing){  //클릭해서 changing==true로 바뀌면 프로필 수정모드 실행
                let _userInfo = userInfo.querySelector("input").value
                let _summary = summary.querySelector("input").value
                let _profileDetail = profileDetail.querySelector("input").value

                userInfo.innerHTML = _userInfo //innerHTML:1. 현재 기재되어 있는 값 가져오는 용도
                summary.innerHTML = _summary   //innerHTML:2. 새로운 값 할당하는 용도
                                               //innerHTML은 HTML 태그 자체를 수정하기 때문에 <input>태그와 관련된 모든 정보 삭제->텍스트만 남게 됨
                if (_profileDetail.startsWith("http")){                                     //만약 사용자가 입력한 값이 "http"로 시작하는 url일 경우
                    _profileDetail = "<a href=" +_profileDetail+ ">" +_profileDetail+ "</a>"//<a>태그로 하이퍼링크를 걸어주기 위해 삽입된 코드
                                                                                            //`<a href= ${_profileDetail} > ${_profileDetail} </a>`<-해도되나?
                }
                profileDetail.innerHTML = _profileDetail

                e.target.textContent="프로필 편집"
                changing=false  //수정불가
            }else {
                let _userInfo = userInfo.textContent //textContent: 태그에 기재된 글자들을 가져옴->추후 input필드의 기본값으로 재사용
                let _summary = summary.textContent
                let _profileDetail = profileDetail.textContent

                userInfo.innerHTML = "<input value=" +_userInfo+ "></input>"
                summary.innerHTML = "<input value=" +_summary+ "></input>"
                profileDetail.innerHTML = "<input value=" +_profileDetail+ "></input>"
            
                e.target.textContent="프로필 편집 완료"
                changing=true   //수정가능
            }
                
            })

            //let profile_pic = document.querySelector("#profile_pic.circle_pic")
            let profile_pic = document.querySelector("#profile_pic .circle_pic")
            profile_pic.addEventListener("mouseover",
                function(e){
                    e.target.style.filter="grayscale(50%)" //흑백화시킬 수치(50%)
                })

            profile_pic.addEventListener("mouseleave",
                function(e){
                    e.target.style.filter="grayscale(0%)" //흑백화시킬 수치(0%)
                })         

            profile_pic.addEventListener("click",
                function(e){
                    profile_pic.setAttribute("src", prompt("이미지 url을 입력해 주세요!"))
                })
        
        })
