//loginPass
$(function(){
    const lookIcon = '.pass i';
    const pass = '.pass #loginPass';
    $(lookIcon).click(function(){
        $(this).toggleClass('active');
        
        let has = $(this).hasClass('active');
        if(has){
            $(pass).attr('type', 'text');
        }else{
            $(pass).attr('type', 'password');
        }
    });
});

//joinAgree
$(function(){
    const agree01 = '.join #agree01';
    const agree02 = '.join #agree02';
    const all = '.join #allchk';
    $(all).change(function(){
        let chk = $(this).prop('checked');

        if(chk){
            $(agree01).add(agree02).prop('checked',true);
        }else{
            $(agree01).add(agree02).prop('checked',false);
        }
    });
    $(agree01).add(agree02).change(function(){
        let chk01 = $(agree01).prop('checked');
        let chk02 = $(agree02).prop('checked');

        if(chk01 && chk02){
            $(all).prop('checked',true);
        }else{
            $(all).prop('checked',false);
        }
    });
});

function doSubmit(){
    if(!$("input:checkbox[id='agree01']").is(":checked")) {
        alert("이용약관에 동의해 주세요.");
        $("input:checkbox[id='agree01']").focus();
        return;
    }
    if(!$("input:checkbox[id='agree02']").is(":checked")) {
        alert("개인정보 수집 및 이용에 동의해 주세요");
        $("input:checkbox[id='agree02']").focus();
        return;
    }
    const agreeForm = document.agreeForm;
    agreeForm.submit();

    if($('#allchk').is(":checked")){
        location.href="input.html"
    }
}

//joinBirth
$(function(){
    const joinYear = '.join #joinYear';
    const joinMonth = '.join #joinMonth';
    const joinDay = '.join #joinDay';

    let today = new Date();
    let toyear = parseInt(today.getFullYear ());
    let start = toyear;
    let end = toyear - 100;


    for(let i=start; i>=end; i--){
        $(joinYear).append('<option>' + i + '</option>');
    }

    for(let j=1; j<=12; j++){
        $(joinMonth).append('<option>' + j + '</option>');
    }

    for(let k=1; k<=31; k++){
        $(joinDay).append('<option>' + k + '</option>');
    }
});

//joinEmail
$(function() {
    let joinEmail = '.join #email';
    let textEmail = '.join #textEmail';
    $(joinEmail).change(function() {
        if ($(joinEmail).val() == 'directly') {
            $(textEmail).val("");
            $(textEmail).focus();
        } else {
            $(textEmail).val($(joinEmail).val());
        }
    })
});

//유효성검사
$(function(){
    function showErrorMsg(obj, msg) {
        $(obj).html(msg);
        $(obj).show();
    }
    
    function check(regul,what,message){
        if(regul.test(what.value)){
            return true;
        }
        alert(message);
        what.value = "";
        what.focus();
    }
    
    function idCheck(){
        const joinId = document.getElementById('joinId');
        //아이디 입력 하지 않았을 경우
        let id = $(joinId).val();
        if(id == ""){
            showErrorMsg('#idError',"* 아이디를 입력해 주세요.");
            $(joinId).focus();
            return false;
        }else{
            $('#idError').hide();
        }
    
        //아이디 유효성 검사
        const regId = /^[0-9a-zA-Z].{6,12}$/;
        if(!check(regId,joinId,"* 아이디는 6~12자의 대소문자와 숫자로만 입력 가능합니다.")){
            return false;
        }

        return true;
    }

    function pwCheck01(){
        const joinPass = document.getElementById('joinPass');
        //비밀번호 입력 하지 않았을 경우
        let pass = $(joinPass).val();
        if(pass == ""){
            showErrorMsg('#pw01Error',"* 비밀번호를 입력해 주세요.");
            $(joinPass).focus();
            return false;
        }else{
            $('#pw01Error').hide();
        }
    
        //비밀번호 유효성 검사
        const regPass = /^(?=.*[a-zA-Z])(?=.*[~!@#$%^*+=-])(?=.*[0-9]).{10,16}$/;
        if(!check(regPass,joinPass,"비밀번호는 영문자+숫자+특수문자 조합으로 10~16자리 사용해야 합니다.")){
            return false;
        }

        return true;
    }
    
    function pwCheck02(){
        //비밀번호 입력 하지 않았을 경우
        const joinPassChk = document.getElementById('joinPassChk'); 
        let pass = $('#joinPass').val();
        let passChk = $(joinPassChk).val();
        if(passChk == ""){
            showErrorMsg('#pw02Error',"* 비밀번호 확인은 필수입니다.");
            $(joinPassChk).focus();
            return false;
        }else{
            $(pw02Error).hide();
        }
    
        //비밀번호와 비밀번호 확인이 일치 하지 않을 경우
        if(pass != passChk) {
            showErrorMsg('#pw02Error',"* 비밀번호가 일치 하지 않습니다.");
            return false;
        }

        return true;
    }

    function nameCheck(){
        const joinName = document.getElementById('joinName');
        //이름 입력 하지 않았을 경우
        let name = $(joinName).val();
        if(name == "") {
            showErrorMsg('#nameError',"* 이름을 입력해 주세요.");
            $(joinName).focus();
            return false;
        }
        else{
            $('#nameError').hide();
        }
        //이름에 특수 문자가 들어간 경우
        const regName = /^[가-힝a-zA-Z]{2,}$/;
        if(!check(regName,joinName,"두글자 이상의 대소문자 또는 한글로 작성해야합니다.")) {
            return false;
        }

        return true;
    }

    function phonCheck(){
        const phonMiddle = document.getElementById('phonMiddle');
        const phonLast = document.getElementById('phonLast');
        //휴대폰번호를 입력 하지 않았을 경우
        let middle = $(phonMiddle).val();
        let last = $(phonLast).val();
        if(middle == ""){
            showErrorMsg('#phonError',"* 휴대폰번호를 입력하지 않았습니다.");
            $(phonMiddle).focus();
            return false;
        }else{
            $('#phonError').hide();
        }
        if(last == ""){
            showErrorMsg('#phonError',"* 휴대폰번호를 입력하지 않았습니다.");
            $(phonLast).focus();
            return false;
        }else{
            $('#phonError').hide();
        }
    
        //휴대폰번호 유효성 검사
        const regNum = /^[0-9]*$/;
        if(!check(regNum,phonMiddle,"전화번호는 숫자만 입력할 수 있습니다.")) {
            return false;
        }
        if(!check(regNum,phonLast,"전화번호는 숫자만 입력할 수 있습니다.")) {
            return false;
        }

        return true;
    }

    function emailCheck(){
        const joinEmail = document.getElementById('emailId');
        const joinEmailText = document.getElementById('textEmail');
        //이메일 입력 안했을 경우
        let emailId = $(joinEmail).val();
        let textEmail = $(joinEmailText).val();
        if(emailId == "") {
            showErrorMsg('#emailError',"* 이메일을 입력해 주세요.");
            $(joinEmail).focus();
            return false;
        }else{
            $('#emailError').hide();
        }
        if(textEmail == "") {
            showErrorMsg('#emailError',"* 이메일을 입력해 주세요.");
            $(joinEmailText).focus();
            return false;
        }else{
            $('#emailError').hide();
        }
    
        //이메일 유효성 검사
        const regEmailId = /^[a-zA-Z0-9]([-_.]?[0-9a-zA-Z])*$/;
        const regEmailText = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
        if(!check(regEmailId,joinEmail,"이메일을 잘못 입력 했습니다.")) {
            return false;
        }
        if(!check(regEmailText,joinEmailText,"이메일을 잘못 입력 했습니다.")) {
            return false;
        }

        return true;
    }

    $('#joinId').blur(function(){
        idCheck();
    });
    $('#joinPass').blur(function(){
        pwCheck01();
    });
    $('#joinPassChk').blur(function(){
        pwCheck02();
    });
    $('#joinName').blur(function(){
        nameCheck();
    });
    $('#phonMiddle').blur(function(){
        phonCheck();
    });
    $('#phonLast').blur(function(){
        phonCheck();
    });
    $('#emailId').blur(function(){
        emailCheck();
    });
    $('#textEmail').blur(function(){
        emailCheck();
    });


    const joinForm = document.getElementById('joinForm');
    $(joinForm).submit(function(e){
        e.preventDefault();

        if(!idCheck() || !pwCheck01() || !pwCheck02() || !nameCheck() || !phonCheck() || !emailCheck()){
			return false;
		}else{
            if(!confirm('회원가입 하시겠습니까?')){
                return false;
            }else{
                joinForm.submit();
                return false;
            }
        }
    });
});
