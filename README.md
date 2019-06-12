# Weather Web

Веб страна е изградена од мени за навигација, поле за пребарување на градови, панел кој прикажува детални информации за температурата на селектираниот град, поле за артикли, слики и други податоци и фоотер

## Изработка

За изработка на Weather Web е користен HTML, CSS, Javascript, Bootstrap, AngularJS. Страната е изработена во IntelliJ IDEA WebStorm.

### API Request

Податоците се преземаат од www.openweathermap.com со помош на Json повици. Податоци кои се користат се град, температура, брзина на ветер и влажност на воздух.

```
vm.city=data.data.city.name;
vm.vetar = data.data.list[0].wind.speed;
```

### Прикажување на временска прогноза

Временската прогноза за еден град е прикажана со помош на Bootstrap зони. Секоја зона прикажува различни податоци за време. Прво е представено моменталната временската температура според УТЦ временска зона, во наредните 6 зони се представени температури во временски интервал од 18 часа. Со мали слики сликовито е прдставена временската состојба.

![slika1](https://user-images.githubusercontent.com/33635431/59307576-14503400-8c9f-11e9-8ee0-96af0ca29afa.PNG)

## Пребаруванје на градови

Преку текст полето за пребаруванје или стрелката која означува drop-down мени на сите градови во Европа. Може да пребарувате за било кој град во светот.

### Стартуванје на проекто

За стартуванје на проектот во самиот фолдер каде што се наоѓа index.html фалјот внесете ги следните команди во CMD.

```
npm install angular
npm run copy-libs
```
Потоа стартувајте го index.html фајлот.

## Изработил

* **Кристија Габер** 


