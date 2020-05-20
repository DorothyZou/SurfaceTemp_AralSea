/*
Author: Leying (Dorothy) Zou

This js script includes two parts: geometry imports & functions
geometry imports: line 12-889
functions: line 942-1151
I do NOT suggest to separate the codes because Google Earth Engine (GEE) \
may not support the connections between js files. GEE allows the users to \
convert the geometry codes to import records which can clear the space of \
code editor area.
*/
var study_area =
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[57.699053916047596, 46.840681333296175],
          [57.69739254956441, 43.62818253736934],
          [61.56721879528739, 43.62818253736934],
          [61.597488945273845, 45.212542817630556],
          [61.64325079896995, 46.861934946114026]]]),
    water1 =
    /* color: #184aff */
    /* shown: false */
    /* locked: true */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[59.788660117716844, 46.17541442129709],
                  [59.788660117716844, 46.16828191456675],
                  [59.79792983207231, 46.16828191456675],
                  [59.79792983207231, 46.17541442129709]]], null, false),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.01592613242903, 46.080208097819195],
                  [60.01592613242903, 46.07615946618447],
                  [60.021762619245436, 46.07615946618447],
                  [60.021762619245436, 46.080208097819195]]], null, false),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.064104925561246, 46.10561061192811],
                  [60.064104925561246, 46.1046882131628],
                  [60.06530655519992, 46.1046882131628],
                  [60.06530655519992, 46.10561061192811]]], null, false),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.129590329108986, 45.382244462712],
                  [60.129590329108986, 45.37211563930947],
                  [60.14400988477305, 45.37211563930947],
                  [60.14400988477305, 45.382244462712]]], null, false),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.47096501611565, 44.800815004985964],
                  [59.47096501611565, 44.77937348853488],
                  [59.5066705825219, 44.77937348853488],
                  [59.5066705825219, 44.800815004985964]]], null, false),
            {
              "class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.00380193017815, 44.6993849353407],
                  [60.00380193017815, 44.68962266348686],
                  [60.0175348403344, 44.68962266348686],
                  [60.0175348403344, 44.6993849353407]]], null, false),
            {
              "class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.91591130517815, 44.85146328879619],
                  [59.91591130517815, 44.828092687535765],
                  [59.95436345361565, 44.828092687535765],
                  [59.95436345361565, 44.85146328879619]]], null, false),
            {
              "class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.36910310393516, 44.18548192441141],
                  [59.36910310393516, 44.173663506394],
                  [59.39107576018516, 44.173663506394],
                  [59.39107576018516, 44.18548192441141]]], null, false),
            {
              "class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.56685701018516, 44.10664772513634],
                  [59.56685701018516, 44.09284091602731],
                  [59.59432283049766, 44.09284091602731],
                  [59.59432283049766, 44.10664772513634]]], null, false),
            {
              "class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.12121000655936, 46.423385100472345],
                  [60.12121000655936, 46.41770495053756],
                  [60.12395658859061, 46.41770495053756],
                  [60.12395658859061, 46.423385100472345]]], null, false),
            {
              "class": 0,
              "system:index": "9"
            })]),
    land1 =
    /* color: #ffd53d */
    /* shown: false */
    /* locked: true */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[60.34004717725352, 45.369703747273],
                  [60.34004717725352, 45.358125233784065],
                  [60.355840023933204, 45.358125233784065],
                  [60.355840023933204, 45.369703747273]]], null, false),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.290144166858255, 45.34072857400509],
                  [60.290144166858255, 45.33783268545364],
                  [60.29409237852818, 45.33783268545364],
                  [60.29409237852818, 45.34072857400509]]], null, false),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.83759191472806, 45.28172898720883],
                  [61.83759191472806, 45.279554822626906],
                  [61.841196803644074, 45.279554822626906],
                  [61.841196803644074, 45.28172898720883]]], null, false),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.84385755498685, 45.280943881831554],
                  [61.84385755498685, 45.278648896128644],
                  [61.84771993596829, 45.278648896128644],
                  [61.84771993596829, 45.280943881831554]]], null, false),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.503640970071544, 43.75438127161318],
                  [59.503640970071544, 43.7481813047333],
                  [59.5122240389192, 43.7481813047333],
                  [59.5122240389192, 43.75438127161318]]], null, false),
            {
              "class": 1,
              "system:index": "4"
            })]),
    water88 =
    /* color: #1488ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[60.3360212152312, 45.21034590056676],
                  [60.3360212152312, 45.20841088393572],
                  [60.33670786073901, 45.20841088393572],
                  [60.33670786073901, 45.21034590056676]]], null, false),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.409492284567136, 45.16727621795517],
                  [60.409492284567136, 45.165339736609035],
                  [60.41361215761401, 45.165339736609035],
                  [60.41361215761401, 45.16727621795517]]], null, false),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.538581640035886, 45.283827753181704],
                  [60.538581640035886, 45.282861503843144],
                  [60.53995493105151, 45.282861503843144],
                  [60.53995493105151, 45.283827753181704]]], null, false),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[58.875541462978305, 44.86337136227114],
                  [58.875541462978305, 44.86142457686918],
                  [58.87966133602518, 44.86142457686918],
                  [58.87966133602518, 44.86337136227114]]], null, false),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.143541476447325, 46.51194484598672],
                  [60.143541476447325, 46.50958203597867],
                  [60.14594473572467, 46.50958203597867],
                  [60.14594473572467, 46.51194484598672]]], null, false),
            {
              "class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.145577030572014, 46.28819938409483],
                  [61.145577030572014, 46.286538631540296],
                  [61.14935358086498, 46.286538631540296],
                  [61.14935358086498, 46.28819938409483]]], null, false),
            {
              "class": 0,
              "system:index": "5"
            })]),
    land88 =
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[61.327538090142326, 46.253075608167244],
                  [61.327538090142326, 46.25141379101503],
                  [61.32891138115795, 46.25141379101503],
                  [61.32891138115795, 46.253075608167244]]], null, false),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.278099613579826, 46.261621300995344],
                  [61.278099613579826, 46.25782337971371],
                  [61.283592777642326, 46.25782337971371],
                  [61.283592777642326, 46.261621300995344]]], null, false),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.36116178654575, 46.265915682508364],
                  [60.36116178654575, 46.26377955148977],
                  [60.365281659592625, 46.26377955148977],
                  [60.365281659592625, 46.265915682508364]]], null, false),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.65753374774921, 43.76637105522639],
                  [60.65753374774921, 43.74653287561231],
                  [60.69461260517109, 43.74653287561231],
                  [60.69461260517109, 43.76637105522639]]], null, false),
            {
              "class": 1,
              "system:index": "3"
            })]),
    water98 =
    /* color: #110ed6 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[60.10810784991749, 44.881295182042706],
                  [60.10810784991749, 44.87156362772341],
                  [60.14106683429249, 44.87156362772341],
                  [60.14106683429249, 44.881295182042706]]], null, false),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.81971673663624, 44.62187549705427],
                  [59.81971673663624, 44.60427871768913],
                  [59.84718255694874, 44.60427871768913],
                  [59.84718255694874, 44.62187549705427]]], null, false),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.57801751788624, 44.78585498459959],
                  [59.57801751788624, 44.7761073019043],
                  [59.58625726397999, 44.7761073019043],
                  [59.58625726397999, 44.78585498459959]]], null, false),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.025843020583686, 46.063279541612914],
                  [60.025843020583686, 46.05374995442678],
                  [60.039575930739936, 46.05374995442678],
                  [60.039575930739936, 46.063279541612914]]], null, false),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.94676321204503, 46.230787007796515],
                  [60.94676321204503, 46.225086824232285],
                  [60.95912283118565, 46.225086824232285],
                  [60.95912283118565, 46.230787007796515]]], null, false),
            {
              "class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.04152029212315, 46.31621873193041],
                  [61.04152029212315, 46.305784220498985],
                  [61.0552532022794, 46.305784220498985],
                  [61.0552532022794, 46.31621873193041]]], null, false),
            {
              "class": 0,
              "system:index": "5"
            })]),
    land98 =
    /* color: #ffce1a */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[61.47136038001378, 46.22983701830922],
                  [61.47136038001378, 46.220336219085794],
                  [61.48509329017003, 46.220336219085794],
                  [61.48509329017003, 46.22983701830922]]], null, false),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.28871267493565, 46.14427062894067],
                  [61.28871267493565, 46.14046458681797],
                  [61.29283254798253, 46.14046458681797],
                  [61.29283254798253, 46.14427062894067]]], null, false),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.008103936810556, 46.252155699269295],
                  [60.008103936810556, 46.25025644370032],
                  [60.010163873333994, 46.25025644370032],
                  [60.010163873333994, 46.252155699269295]]], null, false),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.54623736972352, 43.637741903805434],
                  [60.54623736972352, 43.63028738153992],
                  [60.55928363437196, 43.63028738153992],
                  [60.55928363437196, 43.637741903805434]]], null, false),
            {
              "class": 1,
              "system:index": "3"
            })]),
    water08 =
    /* color: #1488ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[59.670619337016575, 45.15776594847399],
                  [59.670619337016575, 45.15195533711034],
                  [59.678859083110325, 45.15195533711034],
                  [59.678859083110325, 45.15776594847399]]], null, false),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[58.6612504405322, 45.54957425999191],
                  [58.6612504405322, 45.54476553161618],
                  [58.673610059672825, 45.54476553161618],
                  [58.673610059672825, 45.54957425999191]]], null, false),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.56868693927769, 45.609514121673975],
                  [59.56868693927769, 45.6047105238035],
                  [59.58516643146519, 45.6047105238035],
                  [59.58516643146519, 45.609514121673975]]], null, false),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.63704562203503, 46.504459784801064],
                  [60.63704562203503, 46.500678718866695],
                  [60.64803195016003, 46.500678718866695],
                  [60.64803195016003, 46.504459784801064]]], null, false),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.73042941109753, 46.477986800951946],
                  [60.73042941109753, 46.47325812646098],
                  [60.74004244820691, 46.47325812646098],
                  [60.74004244820691, 46.477986800951946]]], null, false),
            {
              "class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.23030734078503, 46.44582371132109],
                  [61.23030734078503, 46.44298487941717],
                  [61.23580050484753, 46.44298487941717],
                  [61.23580050484753, 46.44582371132109]]], null, false),
            {
              "class": 0,
              "system:index": "5"
            })]),
    land08 =
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[61.05452609078503, 46.66773928149646],
                  [61.05452609078503, 46.663969586953804],
                  [61.06001925484753, 46.663969586953804],
                  [61.06001925484753, 46.66773928149646]]], null, false),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.21108126656628, 46.61871274713774],
                  [61.21108126656628, 46.61116625992361],
                  [61.22344088570691, 46.61116625992361],
                  [61.22344088570691, 46.61871274713774]]], null, false),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[62.118572128648125, 46.31239102801504],
                  [62.118572128648125, 46.30669932486951],
                  [62.132305038804375, 46.30669932486951],
                  [62.132305038804375, 46.31239102801504]]], null, false),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.725129946327236, 44.1416661273731],
                  [60.725129946327236, 44.13279595084406],
                  [60.738862856483486, 44.13279595084406],
                  [60.738862856483486, 44.1416661273731]]], null, false),
            {
              "class": 1,
              "system:index": "3"
            })]),
    water13 =
    /* color: #00ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[58.510580293001546, 45.13333784748775],
                  [58.510580293001546, 45.13043137067262],
                  [58.51470016604842, 45.13043137067262],
                  [58.51470016604842, 45.13333784748775]]], null, false),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[58.53941940432967, 45.23883938161063],
                  [58.53941940432967, 45.23787236632788],
                  [58.549032441439046, 45.23787236632788],
                  [58.549032441439046, 45.23883938161063]]], null, false),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.239638972625684, 45.94762176617763],
                  [59.239638972625684, 45.94571199172484],
                  [59.242385554656934, 45.94571199172484],
                  [59.242385554656934, 45.94762176617763]]], null, false),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.010050253281506, 46.41246330681901],
                  [61.010050253281506, 46.41056960999904],
                  [61.012796835312756, 46.41056960999904],
                  [61.012796835312756, 46.41246330681901]]], null, false),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.880960897812756, 46.43139665873195],
                  [60.880960897812756, 46.42855707510117],
                  [60.886454061875256, 46.42855707510117],
                  [60.886454061875256, 46.43139665873195]]], null, false),
            {
              "class": 0,
              "system:index": "4"
            })]),
    land13 =
    /* color: #ffda26 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[61.95382156470657, 46.378366703901776],
                  [61.95382156470657, 46.37457687738641],
                  [61.96206131080032, 46.37457687738641],
                  [61.96206131080032, 46.378366703901776]]], null, false),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.43609085181595, 46.33856040702398],
                  [61.43609085181595, 46.33381963051042],
                  [61.44295730689407, 46.33381963051042],
                  [61.44295730689407, 46.33856040702398]]], null, false),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.46218338111282, 46.24366678323094],
                  [61.46218338111282, 46.239867618436676],
                  [61.47316970923782, 46.239867618436676],
                  [61.47316970923782, 46.24366678323094]]], null, false),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[58.93939642849526, 44.94981693026691],
                  [58.93939642849526, 44.94204109535731],
                  [58.94763617458901, 44.94204109535731],
                  [58.94763617458901, 44.94981693026691]]], null, false),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.20032172146401, 44.83014707120214],
                  [59.20032172146401, 44.82625118822589],
                  [59.20718817654213, 44.82625118822589],
                  [59.20718817654213, 44.83014707120214]]], null, false),
            {
              "class": 1,
              "system:index": "4"
            })]),
    water18 =
    /* color: #01c4ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[59.741460834678264, 45.27800920060995],
                  [59.741460834678264, 45.27317729386341],
                  [59.746953998740764, 45.27317729386341],
                  [59.746953998740764, 45.27800920060995]]], null, false),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.83621791475639, 45.37359623422406],
                  [59.83621791475639, 45.36973725862147],
                  [59.84171107881889, 45.36973725862147],
                  [59.84171107881889, 45.37359623422406]]], null, false),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.634344135459514, 45.152245909892684],
                  [59.634344135459514, 45.1483718595827],
                  [59.63846400850639, 45.1483718595827],
                  [59.63846400850639, 45.152245909892684]]], null, false),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.28382184960669, 46.529920786542064],
                  [60.28382184960669, 46.5270863401281],
                  [60.28656843163794, 46.5270863401281],
                  [60.28656843163794, 46.529920786542064]]], null, false),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.719155101559814, 46.51763711717118],
                  [60.719155101559814, 46.51385696781728],
                  [60.72602155663794, 46.51385696781728],
                  [60.72602155663794, 46.51763711717118]]], null, false),
            {
              "class": 0,
              "system:index": "4"
            })]),
    land18 =
    /* color: #ffb612 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[61.15545132795708, 46.57857245405414],
                  [61.15545132795708, 46.574796545801284],
                  [61.16094449201958, 46.574796545801284],
                  [61.16094449201958, 46.57857245405414]]], null, false),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[61.27630093733208, 46.652150115115546],
                  [61.27630093733208, 46.64932205359608],
                  [61.283167392410206, 46.64932205359608],
                  [61.283167392410206, 46.652150115115546]]], null, false),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.779106444640874, 45.71357274191467],
                  [60.779106444640874, 45.71069598413039],
                  [60.78253967217994, 45.71069598413039],
                  [60.78253967217994, 45.71357274191467]]], null, false),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[60.75782043389869, 45.76053882522743],
                  [60.75782043389869, 45.75958072858568],
                  [60.76194030694556, 45.75958072858568],
                  [60.76194030694556, 45.76053882522743]]], null, false),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[59.81677466730169, 44.71011246218806],
                  [59.81677466730169, 44.70230422334628],
                  [59.82638770441106, 44.70230422334628],
                  [59.82638770441106, 44.71011246218806]]], null, false),
            {
              "class": 1,
              "system:index": "4"
            })]);


//------------Data (Landsat, dates) collections--------------------
// year should be string. e.g. '1988'.
var date_lat5 = function(year){
  var startdate = year.concat('-06-01');
  var enddate = year.concat('-08-31');
  var data = ee.ImageCollection('LANDSAT/LT05/C01/T1')
               .filterBounds(study_area)
               .filterDate(startdate, enddate);
  return data;
};

var date_lat7 = function(year){
  var startdate = year.concat('-06-01');
  var enddate = year.concat('-08-31');
  var data = ee.ImageCollection('LANDSAT/LE07/C01/T1')
               .filterBounds(study_area)
               .filterDate(startdate, enddate);
  return data;
};

var date_lat8 = function(year){
  var startdate = year.concat('-06-01');
  var enddate = year.concat('-08-31');
  var data = ee.ImageCollection('LANDSAT/LC08/C01/T1')
               .filterBounds(study_area)
               .filterDate(startdate, enddate);
  return data;
};

//----------image selection & Brightness temperature---------

var BT = function(data) {
  // input "data" is an image collection of a specific year

  // select the best quality images from the image collection
  var best = ee.Algorithms.Landsat.pathRowLimit(data, 5, 12);
  // calculate the TOA radiance (brightness temperature) per image
  var bt_per = best.map(ee.Algorithms.Landsat.TOA);
  // mosaic to the study area
  var bt_result = bt_per.mosaic().clip(study_area);
  return bt_result;
};

//---------------------Classify to Emissivity------------------------

var classify = function(BT, landsat, water, land){
  var bands = [];
  if (landsat == 5 || landsat == 7){
    bands = ['B1','B2', 'B3', 'B4', 'B5', 'B7'];
  }
  else if (landsat == 8){
    bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
  }
  else {print("landsat value wrong.");}
  // Load the image to be used for prediction.
  var imageClassify = BT.select(bands);
  // Load training points. The numeric property 'class' stores known labels.
  // water = class0, land = class1, cloud = class2
  var points= water.merge(land);
  // Overlay the points on the imagery to get training.
  var training = BT.sampleRegions(points, ['class'], 30);
  // Train a CART classifier with default parameters.
  var trained = ee.Classifier.cart().train(training, 'class', bands);
  // Classify the image with the same bands used for training.
  var classified = BT.select(bands).classify(trained);

  // recalssify to emissivity values
  var reclassified = classified.remap([0, 1], [0.9885, 0.914],
                               null, 'classification');
  return reclassified;
};

// --------------------BT to ST ---------------------
// surtem equation T = BT/(1+(λ*BT/ρ)*lnε)
// ρ = 1.438∗10−2 mK = 14388 µm K
// Landsat 5/7: λ = 11.45 μm
// Landsat 8: λ = 10.8 μm
// °C = K - 273.15
var ST = function (BT, classification, landsat){
  var st_result;
  if (landsat == 5) {
    st_result = BT.expression(
      'bt / (1 + (11.45 * bt / 14388) * log( EMI )) -273.15', {
        'bt': BT.select('B6'),
        'EMI': classification
      });
  }
  else if (landsat == 7){
    st_result = BT.expression(
      'bt / (1 + (11.45 * bt / 14388) * log( EMI )) -273.15', {
        'bt': BT.select('B6_VCID_2'),
        'EMI': classification
      });
  }
  else if (landsat == 8) {
    st_result = BT.expression(
      'bt / (1 + (10.8 * bt / 14388) * log( EMI )) -273.15', {
        'bt': BT.select('B10'),
        'EMI': classification
      });
  }
  else{print('wrong landsat value.');}
  //make a cloud mask
  var cloud_mask = st_result.gt(15);
  st_result = st_result.updateMask(cloud_mask);
  return st_result;
};

//------------------One Step Function--------------------------
var one_step_st = function(){
  var st_result = null;
  var year = prompt("Please enter the year", "1988");
  var year_num = Number(year);
  if (year_num < 1988 || year_num > 2018){
    print("over the range");
    return;
  }
  else if (year_num == 1994){
    // 1994 requires the specific date
    var data1994 = ee.ImageCollection('LANDSAT/LT05/C01/T1')
               .filterBounds(study_area)
               .filterDate('1994-07-01', '1994-08-31');
    var bt_1994 = BT(data1994);
    var class_1994 = classify(bt_1994, 5, water88, land88);
    st_result = ST(bt_1994, class_1994, 5);
    return st_result;
  }
  else if ([1999, 2006, 2007].indexOf(year_num) >= 0){
    // These years requires Landsat 5, classification type 98
    var data598 = date_lat5(year);
    var bt_598 = BT(data598);
    var class_598 = classify(bt_598, 5, water98, land98);
    st_result = ST(bt_598, class_598, 5);
    return st_result;
  }
  else if ([2008, 2009, 2010].indexOf(year_num) >= 0){
    // These years requires Landsat 5, classification type 08
    var data508 = date_lat5(year);
    var bt_508 = BT(data508);
    var class_508 = classify(bt_508, 5, water08, land08);
    st_result = ST(bt_508, class_508, 5);
    return st_result;
  }
  else if (year_num == 2011 || year_num == 2012){
    // These years requires Landsat 7, classification type 08
    var data708 = date_lat7(year);
    var bt_708 = BT(data708);
    var class_708 = classify(bt_708, 7, water08, land08);
    st_result = ST(bt_708, class_708, 7);
    return st_result;
  }
  else if (year_num >= 1988 && year_num <= 2001){
    // These years (except yeas above) requires Landsat 5, classification type 88
    var data588 = date_lat5(year);
    var bt_588 = BT(data588);
    var class_588 = classify(bt_588, 5, water88, land88);
    st_result = ST(bt_588, class_588, 5);
    return st_result;
  }
  else if (year_num >= 2002 && year_num <= 2005){
    // These years requires Landsat 7, classification type 98
    var data798 = date_lat7(year);
    var bt_798 = BT(data798);
    var class_798 = classify(bt_798, 7, water98, land98);
    st_result = ST(bt_798, class_798, 7);
    return st_result;
  }
  else if (year_num >= 2013 && year <= 2018){
    // These years (except yeas above) requires Landsat 8, classification type 13
    var data813 = date_lat8(year);
    var bt_813 = BT(data813);
    var class_813 = classify(bt_813, 8, water13, land13);
    st_result = ST(bt_813, class_813, 8);
    return st_result;
  }
  else {
    print("NaN year input");
    return;
  }
  //var bt_result = BT(data);
  //var class_result = classify(bt_result, landsat, water, land);
  //var st_result = ST(bt_result, class_result, landsat);
  //return st_result;
};

//--------------------Mean surface temperature-----------------
var meantemp = function(st){
  var mean_temp = st.reduceRegion({
                      reducer: ee.Reducer.mean(),
                      geometry: study_area,
                      scale: 100,
                      maxPixels: 1e9
  });
  return mean_temp;
};

//----------------------Style Palette--------------------------
var classify_pal = ['00FFFF', '000000'];
var temp_pal = ['3B8FF5', '6FFFF8', '6FFF97', 'FBFF6F', 'FFC56F', 'FF876F'];

//----------------------------- MAP ---------------------------

// Map centre:
Map.setCenter(59.662850, 45.386662, 6.5);
// surface temperature image result
var st_result = one_step_st();
// mean surface temperature value
var ms = meantemp(st_result);
Map.addLayer(st_result, {min:25, max: 45,palette:temp_pal})
print("mean surface temp in the input year:", ms);

// Author: Leying (Dorothy) Zou
