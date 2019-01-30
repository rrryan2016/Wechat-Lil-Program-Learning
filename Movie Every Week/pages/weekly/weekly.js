Page({
  data: {
    thisWeekRecommendation: {
      name: "my bolo tie",
      comment: "One's Must Have",
      imagePath: "/images/myBoloTie.png",
      isHighlyRecommended: true
    },
    count: 123,
    scores: 58,
    currentIndex: 0,
    weeklyRecommendationList: [{
        name: "Liu Wenzhe"
      },
      {
        name: "Gong Yuan"
      },
      {
        name: "Xiao Pang"
      },
      {
        name: "Kobe Bryant"
      }
    ]
  },
  onLoad: function(options) {
    this.setData({
      currentIndex: this.data.weeklyRecommendationList.length - 1
    })

  }
})