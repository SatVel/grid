import DS from 'ember-data';


export default DS.Model.extend({
    itemName: DS.attr('string'),
    itemGroupName: DS.attr('string'),
    itemSubgroupName: DS.attr('string'),
    units: DS.attr('number'),
    avg: DS.attr('number'),
    revenue: DS.attr('number'),
    mtdUnits: DS.attr('number'),
    mtdAvg: DS.attr('number'),
    mtdRevenue: DS.attr('number'),
    lastYearMtdUnits: DS.attr('number'),
    lastYearMtdAvg: DS.attr('number'),
    lastYearMtdRevenue: DS.attr('number'),
    varianceLastYearMtdUnits: DS.attr('number'),
    varianceLastYearMtdAvg: DS.attr('number'),
    varianceLastYearMtdRevenue: DS.attr('number'),
    forecastUnits: DS.attr('number'),
    forecastAvg: DS.attr('number'),
    forecastRevenue: DS.attr('number'),
    forecastMtdUnits: DS.attr('number'),
    forecastMtdAvg: DS.attr('number'),
    forecastMtdRevenue: DS.attr('number'),
    varianceForecastMtdUnits: DS.attr('number'),
    varianceForecastMtdAvg: DS.attr('number'),
    varianceForecastMtdRevenue: DS.attr('number'),
    isBanquet: DS.attr('boolean')
});
