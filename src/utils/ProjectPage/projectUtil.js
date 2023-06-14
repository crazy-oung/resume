export const getTag = (ONGOING_YN) => {
  switch (ONGOING_YN) {
    case "SLOW":
      return "천천히 진행중";
    case "STOP":
      return "멈춤";
    case "ONGOING":
      return "진행중";
    case "FAST":
      return "탄력 붙었어요!";
    case "DONE":
      return "완료";
    default:
      return "";
  }
};
