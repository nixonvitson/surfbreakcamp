export type DaySchedule = {
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
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'поездка в старинный форт Галле',
        evening: 'разбор ошибок по видео'
      }
    },
    week2: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'поездка в буддистский храм Матара и речное сафари, на котором можно увидеть крокодилов!',
        evening: 'разбор ошибок по видео'
      }
    }
  },
  // Tuesday (1)
  1: {
    week1: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'йога, тренировка гребли и разворотов в бассейне',
        evening: 'лекция про историю сёрфинга'
      }
    },
    week2: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'йога, отработка серф-движений на суше, тренировка баланса и техники',
        evening: 'новая лекция про серфинг на больших волнах'
      }
    }
  },
  // Wednesday (2)
  2: {
    week1: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'поездка на чайную фабрику',
        evening: 'едем к знаменитому шефу Акилле и попробуем местную шри-ланкийскую кухню. Разбор серфинга по видео на вилле'
      }
    },
    week2: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'поездка на атмосферный пляж в заливе Хирикетия. По дороге заедем в храм и сделаем атмосферные снимки у маяка «Дондра»',
        evening: 'разбор ошибок по видео'
      }
    }
  },
  // Thursday (3)
  3: {
    week1: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'йога',
        evening: 'вечеринка в легендарном баре со скейтпарком'
      }
    },
    week2: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'йога',
        evening: 'ужинаем на рыбном рынке, а после устроим уютный киновечер атмосферного фильма про сёрфинг'
      }
    }
  },
  // Friday (4)
  4: {
    week1: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'свободное время',
        evening: 'BBQ-вечер на вилле, фильм на проекторе'
      }
    },
    week2: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon : 'свободное время',
        evening: 'вечеринка в Ахангаме'
      }
    }
  },
  // Saturday (5)
  5: {
    week1: {
      schedule: {
        morning: 'свободный день, заезд в кемп, отдых после долгого перелета',
        afternoon: 'свободный день, заезд в кемп, отдых после долгого перелета',
        evening: 'теория сёрфинга, ужин'
      }
    },
    week2: {
      schedule: {
        morning: 'свободный день, заезд в кемп, отдых после долгого перелета. Для оставшихся - сёрфинг и отдых либо поездка в центр острова',
        afternoon: 'свободный день, заезд в кемп, отдых после долгого перелета',
        evening: 'теория серфинга'
      }
    }
  },
  // Sunday (6)
  6: {
    week1: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'отдых, свободное время',
        evening: 'костер на сикрет пляже'
      }
    },
    week2: {
      schedule: {
        morning: 'завтрак, сёрфинг',
        afternoon: 'свободное время',
        evening: 'закат на серферском пляже «Lazy Right»'
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