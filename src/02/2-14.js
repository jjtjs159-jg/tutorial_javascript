let a = 2 + 2;

switch (a) {
    case 3:
        alert('!!');
    case 4:
        alert('!!!');
    case 5:
        alert('zzz');
        break;
    case 6:
    case 7:
        alert('실행 X')
    default:
        alert('default');
}

// 4이므로 !!! 출력 후 zzz 출력 후 종료
// switch case 인수에는 어떤 표현식도 가능
// 실행 코드가 같으면 묶기도 가능
// 형과 값이 같아야 실행된다.