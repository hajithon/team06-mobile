function timeDifference(startDate: Date, endDate: Date): string {
    // 두 날짜의 차이를 밀리초 단위로 계산하고 절댓값을 취함
    const differenceInMillis = Math.abs(endDate.getTime() - startDate.getTime());
  
    // 밀리초를 초 단위로 변환
    let differenceInSeconds = Math.floor(differenceInMillis / 1000);
  
    // 차이를 시, 분, 초로 변환
    const hours = Math.floor(differenceInSeconds / 3600);
    differenceInSeconds %= 3600;
    const minutes = Math.floor(differenceInSeconds / 60);
    const seconds = differenceInSeconds % 60;
  
    // 결과를 00:00:00 형식으로 변환
    const formattedTime = [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  
    return formattedTime;
}

export default timeDifference;