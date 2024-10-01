export default function utcToKst(utcDateString: string): string {
  // UTC 문자열을 Date 객체로 변환
  const utcDate = new Date(utcDateString);

  // KST 타임존으로 변환 후 날짜만 추출
  const kstDateString = utcDate.toLocaleDateString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return kstDateString;
}
