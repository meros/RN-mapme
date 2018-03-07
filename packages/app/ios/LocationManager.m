#import "LocationManager.h"
#import <React/RCTLog.h>

@implementation LocationManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(startTracking)
{
  RCTLogInfo(@"Called start tracking");
}

RCT_EXPORT_METHOD(stopTracking)
{
  RCTLogInfo(@"Called stop tracking");
}

@end
