export type DaySchedule = {
  title: string;
  description: string;
  schedule: {
    morning: string;
    afternoon: string;
    evening: string;
  };
};

export type WeekdayCurriculum = {
  [key: number]: { // 0 = Monday, 1 = Tuesday, ..., 6 = Sunday
    week1: DaySchedule;
    week2: DaySchedule;
  }
};

// Curriculum organized by days of the week
export const weekdayCurriculum: WeekdayCurriculum = {
  // Monday (0)
  0: {
    week1: {
      title: "День 1 - Понедельник",
      description: "Вводный день и первое знакомство с сёрфингом",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Йога, тренировка в бассейне",
        evening: "Лекция о безопасности на воде"
      }
    },
    week2: {
      title: "День 8 - Понедельник",
      description: "Техника безопасного падения",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Йога, обучение спасению на воде",
        evening: "Лекция о погодных условиях"
      }
    }
  },
  // Tuesday (1)
  1: {
    week1: {
      title: "День 2 - Вторник",
      description: "Техника гребли и вставания на доску",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Тренировка баланса, растяжка",
        evening: "Просмотр видео о технике сёрфинга"
      }
    },
    week2: {
      title: "День 9 - Вторник",
      description: "Продвинутые техники сёрфинга",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Тренировка в бассейне, силовые упражнения",
        evening: "Просмотр соревнований по сёрфингу"
      }
    }
  },
  // Wednesday (2)
  2: {
    week1: {
      title: "День 3 - Среда",
      description: "Практика на воде и анализ волн",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Йога для сёрферов, теория волн",
        evening: "Групповое обсуждение прогресса"
      }
    },
    week2: {
      title: "День 10 - Среда",
      description: "Улучшение стиля и индивидуальный подход",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Персональная тренировка, видеосъемка",
        evening: "Анализ собственного стиля катания"
      }
    }
  },
  // Thursday (3)
  3: {
    week1: {
      title: "День 4 - Четверг",
      description: "Повышение выносливости и работа над ошибками",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Кардио-тренировка, видеоанализ",
        evening: "Свободное время для отдыха"
      }
    },
    week2: {
      title: "День 11 - Четверг",
      description: "Техники для разных типов волн",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Йога, теоретический урок",
        evening: "Свободное время для отдыха"
      }
    }
  },
  // Friday (4)
  4: {
    week1: {
      title: "День 5 - Пятница",
      description: "Маневрирование на доске",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Силовая тренировка, тренировка баланса",
        evening: "Лекция о типах волн"
      }
    },
    week2: {
      title: "День 12 - Пятница",
      description: "Развитие уверенности на больших волнах",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Тренировка дыхания, медитация",
        evening: "Лекция о сёрф-этикете"
      }
    }
  },
  // Saturday (5)
  5: {
    week1: {
      title: "День 6 - Суббота",
      description: "Развитие техники и стиля",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Йога, пляжные игры",
        evening: "Встреча с местными сёрферами"
      }
    },
    week2: {
      title: "День 13 - Суббота",
      description: "Практика в реальных условиях",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Свободное катание с инструктором",
        evening: "Подготовка к заключительному дню"
      }
    }
  },
  // Sunday (6)
  6: {
    week1: {
      title: "День 7 - Воскресенье",
      description: "Закрепление навыков на воде",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Плавание, растяжка",
        evening: "Командные игры и барбекю"
      }
    },
    week2: {
      title: "День 14 - Воскресенье",
      description: "Закрепление навыков и подведение итогов",
      schedule: {
        morning: "Урок сёрфинга, завтрак",
        afternoon: "Мини-соревнование среди участников",
        evening: "Прощальный ужин и вручение сертификатов"
      }
    }
  }
};

// Keep the original curriculum for backward compatibility
export const curriculum: DaySchedule[] = [
  // Week 1
  weekdayCurriculum[0].week1, // Monday
  weekdayCurriculum[1].week1, // Tuesday
  weekdayCurriculum[2].week1, // Wednesday
  weekdayCurriculum[3].week1, // Thursday
  weekdayCurriculum[4].week1, // Friday
  weekdayCurriculum[5].week1, // Saturday
  weekdayCurriculum[6].week1, // Sunday
  // Week 2
  weekdayCurriculum[0].week2, // Monday
  weekdayCurriculum[1].week2, // Tuesday
  weekdayCurriculum[2].week2, // Wednesday
  weekdayCurriculum[3].week2, // Thursday
  weekdayCurriculum[4].week2, // Friday
  weekdayCurriculum[5].week2, // Saturday
  weekdayCurriculum[6].week2  // Sunday
]; 