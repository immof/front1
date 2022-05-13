$(function(){
    const checkArr = [false,false,false,false,false,false];
    const id = $("[name=id]");
    id.on("change",function(){
        //아이디 검사(영어 소문자/숫자로 4~12글자)
        const idReg = /^[a-z0-9]{4,12}$/;

        if(!idReg.test(id.val())){
            id.next().text("아이디는 영어 소문자/숫자로 4~12글자입니다.");
            id.next().css("color","red");
            checkArr[0] = false;
        }else{
            id.next().text("사용 가능한 아이디입니다.");
            id.next().css("color","green")
            checkArr[0] = true;
        }

    });
    const pw = $("[name=pw]");
    pw.on("change",function(){
        //비밀번호조건(소문자/대문자/숫자로 8~12글자);
        const pwReg = /^[a-zA-Z0-9]{8,12}$/;
    
        if(!pwReg.test(pw.val())){
            pw.next().text("비밀번호는 영어 소문자/대문자/숫자로 8~12글자입니다.");
            pw.next().css("color","red");
            checkArr[1] = false;
        }else{
            pw.next().text("사용 가능한 비밀번호입니다.");
            pw.next().css("color","green");
            checkArr[1] = true;
        }
    });
    const pwRe = $("[name=pwRe]");
    pwRe.on("change",function(){
        //비밀번호확인(비밀번호와, 비밀번호 확인 값이 같은지)
        if(pw.val() == pwRe.val()){
            pwRe.next().text("비밀번호가 일치합니다.");
            pwRe.next().css("color","green");
            checkArr[2] = true;
        }else{
            pwRe.next().text("비밀번호가 일치하지 않습니다.");
            pwRe.next().css("color","red");
            checkArr[2] = false;
        }
        
    });

    const name = $("[name=name]");
    name.on("change",function(){
        //이름(한글 최소 1글자 이상)
        const nameReg = /^[가-힣]+$/;
    
        if(!nameReg.test(name.val())){
            name.next().text("한글(최소 1글자)만 가능합니다.");
            name.next().css("color","red");
            checkArr[3] = false;
        }else{
            name.next().text("사용 가능한 이름입니다.");
            name.next().css("color","green");
            checkArr[3] = true;
        }
    });

    const phone1 = $("[name=phone1]");
    const phone2 = $("[name=phone2]");
    const phone3 = $("[name=phone3]");
    phone1.on("change",function(){
        checkPhone(phone1,phone2,phone3);
    });
    phone2.on("change",function(){
        checkPhone(phone1,phone2,phone3);
    });
    phone3.on("change",function(){
        checkPhone(phone1,phone2,phone3);
    });

    const email = $("[name=email]");
    email.on("chang",function(){
        //이메일(영어/숫자4~12자리@)
        const emailReg = /^[a-zA-Z0-9]{4,20}@/;
        if(!emailReg.test(email.val())){
            email.next().text("이메일 양식을 확인하세요");
            email.next().css("color","red");
            checkArr[5] = false;
        }else{
            email.next().text("사용 가능한 이메일입니다.");
            email.next().css("color","green");
            checkArr[5] = true;
        }

    });



    $("input[type=submit]").on("click",function(e){
        /*
        if(checkArr[0] &&checkArr[1]&&checkArr[2]&&checkArr[3]&&checkArr[4]&&checkArr[5]){

        }else{
            e.preventDefault();
        }
        */
        const comments = $(".comment");
        let count = 0;
        for(let i=0;i<comments.length;i++){
            if(comments.eq(i).css("color") == "green"){
                count++;
            }
        }
        if(count!=6){
            e.preventDefault();
        }
    });

});

function checkPhone(phone1,phone2,phone3){

    //전화번호 (전화번호 1 : 010만 가능, 전화번호 2: 숫자3~4, 전화번호 3: 숫자 4자리)
    const phoneReg1 = /^010$/;
    const phoneReg2 = /^[0-9]{3,4}/;
    const phoneReg3 = /^[0-9]{4}/;
    if(phoneReg1.test(phone1.val()) && phoneReg2.test(phone2.val()) && phoneReg3.test(phone3.val())){
        phone3.next.text("사용가능한 전화번호입니다.");
        phone3.next().css("color","green");
        return true;
    }else{
        phone3.next().text("전화번호를 확인해주세요");
        phone3.next().css("color","red");
        e.preventDefault();
    }
}