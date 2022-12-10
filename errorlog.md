-------------------------------------
Translated Report (Full Report Below)
-------------------------------------

Incident Identifier: B580DB09-A4C2-4996-A56F-A7ADF0B8065E
CrashReporter Key:   76F4D335-25AC-E33E-9516-E9AADD402107
Hardware Model:      MacBookPro16,1
Process:             Datex [6810]
Path:                /Users/USER/Library/Developer/CoreSimulator/Devices/C4926458-B6BB-419B-9165-0EC6781BD878/data/Containers/Bundle/Application/FC72E4AA-1786-4E0C-88C8-06A87C758BA1/Datex.app/Datex
Identifier:          com.denniscoin.Datex
Version:             1.0.0 (1)
Code Type:           X86-64 (Native)
Role:                Foreground
Parent Process:      launchd_sim [1138]
Coalition:           com.apple.CoreSimulator.SimDevice.C4926458-B6BB-419B-9165-0EC6781BD878 [889]
Responsible Process: SimulatorTrampoline [969]

Date/Time:           2022-12-10 02:29:35.3649 +0100
Launch Time:         2022-12-10 02:29:34.8628 +0100
OS Version:          macOS 13.0.1 (22A400)
Release Type:        User
Report Version:      104

Exception Type:  EXC_CRASH (SIGABRT)
Exception Codes: 0x0000000000000000, 0x0000000000000000
Triggered by Thread:  1

Last Exception Backtrace:
0   CoreFoundation                	    0x7ff8004278bb __exceptionPreprocess + 226
1   libobjc.A.dylib               	    0x7ff80004dba3 objc_exception_throw + 48
2   Datex                         	       0x108f9c824 RCTFormatError + 0
3   Datex                         	       0x1090224ed -[RCTExceptionsManager reportFatal:stack:exceptionId:extraDataAsJSON:] + 544
4   Datex                         	       0x109022eb9 -[RCTExceptionsManager reportException:] + 1629
5   CoreFoundation                	    0x7ff80042e31c __invoking___ + 140
6   CoreFoundation                	    0x7ff80042b549 -[NSInvocation invoke] + 305
7   CoreFoundation                	    0x7ff80042b7dc -[NSInvocation invokeWithTarget:] + 70
8   Datex                         	       0x108fd14bb -[RCTModuleMethod invokeWithBridge:module:arguments:] + 580
9   Datex                         	       0x108fd3da9 facebook::react::invokeInner(RCTBridge*, RCTModuleData*, unsigned int, folly::dynamic const&, int, (anonymous namespace)::SchedulingContext) + 577
10  Datex                         	       0x108fd39d2 invocation function for block in facebook::react::RCTNativeModule::invoke(unsigned int, folly::dynamic&&, int) + 103
11  libdispatch.dylib             	    0x7ff80013b7fb _dispatch_call_block_and_release + 12
12  libdispatch.dylib             	    0x7ff80013ca3a _dispatch_client_callout + 8
13  libdispatch.dylib             	    0x7ff800144346 _dispatch_lane_serial_drain + 949
14  libdispatch.dylib             	    0x7ff800144fe3 _dispatch_lane_invoke + 400
15  libdispatch.dylib             	    0x7ff800151b46 _dispatch_workloop_worker_thread + 870
16  libsystem_pthread.dylib       	    0x7ff834c3bce3 _pthread_wqthread + 326
17  libsystem_pthread.dylib       	    0x7ff834c3ac67 start_wqthread + 15

Thread 0::  Dispatch queue: com.apple.main-thread
0   libsystem_kernel.dylib        	    0x7ff834bdf6a2 mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff834bed67d mach_msg2_internal + 82
2   libsystem_kernel.dylib        	    0x7ff834be671a mach_msg_overwrite + 723
3   libsystem_kernel.dylib        	    0x7ff834bdf989 mach_msg + 19
4   CoreFoundation                	    0x7ff8003868de __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff80038102f __CFRunLoopRun + 1371
6   CoreFoundation                	    0x7ff8003806f7 CFRunLoopRunSpecific + 560
7   GraphicsServices              	    0x7ff809c5c28a GSEventRunModal + 139
8   UIKitCore                     	       0x110a1e62b -[UIApplication _run] + 994
9   UIKitCore                     	       0x110a23547 UIApplicationMain + 123
10  Datex                         	       0x108f0312d main + 72
11  dyld_sim                      	       0x10979b2bf start_sim + 10
12  dyld                          	       0x1142ff310 start + 2432

Thread 1 Crashed::  Dispatch queue: com.facebook.react.ExceptionsManagerQueue
0   libsystem_kernel.dylib        	    0x7ff834be630e __pthread_kill + 10
1   libsystem_pthread.dylib       	    0x7ff834c3ef7b pthread_kill + 263
2   libsystem_c.dylib             	    0x7ff800132fe0 abort + 130
3   libc++abi.dylib               	    0x7ff800257742 abort_message + 241
4   libc++abi.dylib               	    0x7ff80024895d demangling_terminate_handler() + 266
5   libobjc.A.dylib               	    0x7ff800032082 _objc_terminate() + 96
6   libc++abi.dylib               	    0x7ff800256b65 std::__terminate(void (*)()) + 8
7   libc++abi.dylib               	    0x7ff800256b16 std::terminate() + 54
8   libdispatch.dylib             	    0x7ff80013ca4e _dispatch_client_callout + 28
9   libdispatch.dylib             	    0x7ff800144346 _dispatch_lane_serial_drain + 949
10  libdispatch.dylib             	    0x7ff800144fe3 _dispatch_lane_invoke + 400
11  libdispatch.dylib             	    0x7ff800151b46 _dispatch_workloop_worker_thread + 870
12  libsystem_pthread.dylib       	    0x7ff834c3bce3 _pthread_wqthread + 326
13  libsystem_pthread.dylib       	    0x7ff834c3ac67 start_wqthread + 15

Thread 2:
0   libsystem_pthread.dylib       	    0x7ff834c3ac58 start_wqthread + 0

Thread 3:
0   libsystem_pthread.dylib       	    0x7ff834c3ac58 start_wqthread + 0

Thread 4:: com.apple.uikit.eventfetch-thread
0   libsystem_kernel.dylib        	    0x7ff834bdf6a2 mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff834bed67d mach_msg2_internal + 82
2   libsystem_kernel.dylib        	    0x7ff834be671a mach_msg_overwrite + 723
3   libsystem_kernel.dylib        	    0x7ff834bdf989 mach_msg + 19
4   CoreFoundation                	    0x7ff8003868de __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff80038102f __CFRunLoopRun + 1371
6   CoreFoundation                	    0x7ff8003806f7 CFRunLoopRunSpecific + 560
7   Foundation                    	    0x7ff800c5595c -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 213
8   Foundation                    	    0x7ff800c55bd5 -[NSRunLoop(NSRunLoop) runUntilDate:] + 72
9   UIKitCore                     	       0x110af2886 -[UIEventFetcher threadMain] + 535
10  Foundation                    	    0x7ff800c7f1c3 __NSThread__start__ + 1009
11  libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
12  libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 5:
0   libsystem_pthread.dylib       	    0x7ff834c3ac58 start_wqthread + 0

Thread 6:
0   libsystem_pthread.dylib       	    0x7ff834c3ac58 start_wqthread + 0

Thread 7:
0   libsystem_pthread.dylib       	    0x7ff834c3ac58 start_wqthread + 0

Thread 8:: com.facebook.react.JavaScript
0   libsystem_kernel.dylib        	    0x7ff834bdf6a2 mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff834bed67d mach_msg2_internal + 82
2   libsystem_kernel.dylib        	    0x7ff834be671a mach_msg_overwrite + 723
3   libsystem_kernel.dylib        	    0x7ff834bdf989 mach_msg + 19
4   CoreFoundation                	    0x7ff8003868de __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff80038102f __CFRunLoopRun + 1371
6   CoreFoundation                	    0x7ff8003806f7 CFRunLoopRunSpecific + 560
7   Datex                         	       0x108fb19bd +[RCTCxxBridge runRunLoop] + 274
8   Foundation                    	    0x7ff800c7f1c3 __NSThread__start__ + 1009
9   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
10  libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 9:: JavaScriptCore libpas scavenger
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cc0ca77 scavenger_thread_main + 1751
3   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
4   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 10:: JIT Worklist Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 11:: JIT Worklist Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 12:: Heap Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 13:: Heap Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 14:: Heap Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 15:: Heap Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 16:: Heap Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 17:: Heap Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 18:: Heap Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15

Thread 19:: JIT Worklist Helper Thread
0   libsystem_kernel.dylib        	    0x7ff834be21fe __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff834c3f7e1 _pthread_cond_wait + 1243
2   JavaScriptCore                	       0x10cb5d007 WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&) + 2327
3   JavaScriptCore                	       0x10cb1fc8f bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&) + 143
4   JavaScriptCore                	       0x10cb20083 WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call() + 323
5   JavaScriptCore                	       0x10cb82215 WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*) + 357
6   JavaScriptCore                	       0x10cb847e9 WTF::wtfThreadEntryPoint(void*) + 9
7   libsystem_pthread.dylib       	    0x7ff834c3f259 _pthread_start + 125
8   libsystem_pthread.dylib       	    0x7ff834c3ac7b thread_start + 15


Thread 1 crashed with X86 Thread State (64-bit):
  rax: 0x0000000000000000  rbx: 0x000070000f92e000  rcx: 0x000070000f92d268  rdx: 0x0000000000000000
  rdi: 0x0000000000000f07  rsi: 0x0000000000000006  rbp: 0x000070000f92d290  rsp: 0x000070000f92d268
   r8: 0x000070000f92d130   r9: 0x000070000f92d390  r10: 0x0000000000000000  r11: 0x0000000000000246
  r12: 0x0000000000000f07  r13: 0x0000003000000008  r14: 0x0000000000000006  r15: 0x0000000000000016
  rip: 0x00007ff834be630e  rfl: 0x0000000000000246  cr2: 0x00007ff800132f5e
  
Logical CPU:     0
Error Code:      0x02000148 
Trap Number:     133


Binary Images:
    0x7ff834bde000 -     0x7ff834c17ff7 libsystem_kernel.dylib (*) <0c2fd2c9-777c-3355-b70f-7b1b6e9d1b0b> /usr/lib/system/libsystem_kernel.dylib
    0x7ff800302000 -     0x7ff80068affc com.apple.CoreFoundation (6.9) <55edff37-af14-3fed-b932-031049d0a665> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation
    0x7ff809c59000 -     0x7ff809c60ff2 com.apple.GraphicsServices (1.0) <5dad91c5-e70d-3f9a-88f2-2d1ed7c8dd24> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/System/Library/PrivateFrameworks/GraphicsServices.framework/GraphicsServices
       0x10fbe3000 -        0x11169ffff com.apple.UIKitCore (1.0) <c2258b63-cdcc-3504-a06e-8067adba9c34> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/System/Library/PrivateFrameworks/UIKitCore.framework/UIKitCore
       0x108efd000 -        0x10913cfff com.denniscoin.Datex (1.0.0) <92cffd00-e0b0-318e-9447-e6d0a4f1cadc> /Users/USER/Library/Developer/CoreSimulator/Devices/C4926458-B6BB-419B-9165-0EC6781BD878/data/Containers/Bundle/Application/FC72E4AA-1786-4E0C-88C8-06A87C758BA1/Datex.app/Datex
       0x109799000 -        0x1097f8fff dyld_sim (*) <638f8a1f-2a32-396d-8389-8d7a60b96b8d> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/usr/lib/dyld_sim
       0x1142f9000 -        0x114390fff dyld (*) <28fd2071-57f3-3873-87bf-e4f674a82de6> /usr/lib/dyld
    0x7ff834c39000 -     0x7ff834c44ff7 libsystem_pthread.dylib (*) <13b5e252-77d1-31e1-888d-1c5f4426ea87> /usr/lib/system/libsystem_pthread.dylib
    0x7ff8000b5000 -     0x7ff800139ff7 libsystem_c.dylib (*) <0d67a685-513e-32ef-be4b-9ed886be9acb> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/usr/lib/system/libsystem_c.dylib
    0x7ff800247000 -     0x7ff80025cffb libc++abi.dylib (*) <b45c6faa-a65d-3be4-8546-f33928080b3b> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/usr/lib/libc++abi.dylib
    0x7ff80002c000 -     0x7ff80005ffe9 libobjc.A.dylib (*) <6d6cbe47-8a16-3a78-ba90-76b48d34921a> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/usr/lib/libobjc.A.dylib
    0x7ff80013a000 -     0x7ff800185ff3 libdispatch.dylib (*) <1b19169b-60d3-328c-91c1-b35f3aa8a173> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/usr/lib/system/libdispatch.dylib
    0x7ff8006fd000 -     0x7ff80102dffc com.apple.Foundation (6.9) <353e6739-fc3a-3636-89f2-194adba7203b> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/System/Library/Frameworks/Foundation.framework/Foundation
       0x10cb16000 -        0x10e132fff com.apple.JavaScriptCore (8614) <c95e8ed3-e8f7-316b-9e89-2852f22023b6> /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/System/Cryptexes/OS/System/Library/Frameworks/JavaScriptCore.framework/JavaScriptCore

EOF

-----------
Full Report
-----------

{"app_name":"Datex","timestamp":"2022-12-10 02:29:35.00 +0100","app_version":"1.0.0","slice_uuid":"92cffd00-e0b0-318e-9447-e6d0a4f1cadc","build_version":"1","platform":7,"bundleID":"com.denniscoin.Datex","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 13.0.1 (22A400)","roots_installed":0,"name":"Datex","incident_id":"B580DB09-A4C2-4996-A56F-A7ADF0B8065E"}
{
  "uptime" : 5600,
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "MacBookPro16,1",
  "coalitionID" : 889,
  "osVersion" : {
    "train" : "macOS 13.0.1",
    "build" : "22A400",
    "releaseType" : "User"
  },
  "captureTime" : "2022-12-10 02:29:35.3649 +0100",
  "incident" : "B580DB09-A4C2-4996-A56F-A7ADF0B8065E",
  "pid" : 6810,
  "cpuType" : "X86-64",
  "roots_installed" : 0,
  "bug_type" : "309",
  "procLaunch" : "2022-12-10 02:29:34.8628 +0100",
  "procStartAbsTime" : 5599906551209,
  "procExitAbsTime" : 5600407929040,
  "procName" : "Datex",
  "procPath" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/C4926458-B6BB-419B-9165-0EC6781BD878\/data\/Containers\/Bundle\/Application\/FC72E4AA-1786-4E0C-88C8-06A87C758BA1\/Datex.app\/Datex",
  "bundleInfo" : {"CFBundleShortVersionString":"1.0.0","CFBundleVersion":"1","CFBundleIdentifier":"com.denniscoin.Datex"},
  "storeInfo" : {"deviceIdentifierForVendor":"3A53E679-3665-5F21-8B7F-E7724C16DF0A","thirdParty":true},
  "parentProc" : "launchd_sim",
  "parentPid" : 1138,
  "coalitionName" : "com.apple.CoreSimulator.SimDevice.C4926458-B6BB-419B-9165-0EC6781BD878",
  "crashReporterKey" : "76F4D335-25AC-E33E-9516-E9AADD402107",
  "responsiblePid" : 969,
  "responsibleProc" : "SimulatorTrampoline",
  "bridgeVersion" : {"build":"20P420","train":"7.0"},
  "sip" : "enabled",
  "exception" : {"codes":"0x0000000000000000, 0x0000000000000000","rawCodes":[0,0],"type":"EXC_CRASH","signal":"SIGABRT"},
  "asiBacktraces" : ["0   CoreFoundation                      0x00007ff8004278cb __exceptionPreprocess + 242\n1   libobjc.A.dylib                     0x00007ff80004dba3 objc_exception_throw + 48\n2   Datex                               0x0000000108f9c824 RCTFormatError + 0\n3   Datex                               0x00000001090224ed -[RCTExceptionsManager reportFatal:stack:exceptionId:extraDataAsJSON:] + 544\n4   Datex                               0x0000000109022eb9 -[RCTExceptionsManager reportException:] + 1629\n5   CoreFoundation                      0x00007ff80042e31c __invoking___ + 140\n6   CoreFoundation                      0x00007ff80042b549 -[NSInvocation invoke] + 305\n7   CoreFoundation                      0x00007ff80042b7dc -[NSInvocation invokeWithTarget:] + 70\n8   Datex                               0x0000000108fd14bb -[RCTModuleMethod invokeWithBridge:module:arguments:] + 580\n9   Datex                               0x0000000108fd3da9 _ZN8facebook5reactL11invokeInnerEP9RCTBridgeP13RCTModuleDatajRKN5folly7dynamicEiN12_GLOBAL__N_117SchedulingContextE + 577\n10  Datex                               0x0000000108fd39d2 ___ZN8facebook5react15RCTNativeModule6invokeEjON5folly7dynamicEi_block_invoke + 103\n11  libdispatch.dylib                   0x00007ff80013b7fb _dispatch_call_block_and_release + 12\n12  libdispatch.dylib                   0x00007ff80013ca3a _dispatch_client_callout + 8\n13  libdispatch.dylib                   0x00007ff800144346 _dispatch_lane_serial_drain + 949\n14  libdispatch.dylib                   0x00007ff800144fe3 _dispatch_lane_invoke + 400\n15  libdispatch.dylib                   0x00007ff800151b46 _dispatch_workloop_worker_thread + 870\n16  libsystem_pthread.dylib             0x00007ff834c3bce3 _pthread_wqthread + 326\n17  libsystem_pthread.dylib             0x00007ff834c3ac67 start_wqthread + 15"],
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "lastExceptionBacktrace" : [{"imageOffset":1202363,"symbol":"__exceptionPreprocess","symbolLocation":226,"imageIndex":1},{"imageOffset":138147,"symbol":"objc_exception_throw","symbolLocation":48,"imageIndex":10},{"imageOffset":653348,"symbol":"RCTFormatError","symbolLocation":0,"imageIndex":4},{"imageOffset":1201389,"symbol":"-[RCTExceptionsManager reportFatal:stack:exceptionId:extraDataAsJSON:]","symbolLocation":544,"imageIndex":4},{"imageOffset":1203897,"symbol":"-[RCTExceptionsManager reportException:]","symbolLocation":1629,"imageIndex":4},{"imageOffset":1229596,"symbol":"__invoking___","symbolLocation":140,"imageIndex":1},{"imageOffset":1217865,"symbol":"-[NSInvocation invoke]","symbolLocation":305,"imageIndex":1},{"imageOffset":1218524,"symbol":"-[NSInvocation invokeWithTarget:]","symbolLocation":70,"imageIndex":1},{"imageOffset":869563,"symbol":"-[RCTModuleMethod invokeWithBridge:module:arguments:]","symbolLocation":580,"imageIndex":4},{"imageOffset":880041,"symbol":"facebook::react::invokeInner(RCTBridge*, RCTModuleData*, unsigned int, folly::dynamic const&, int, (anonymous namespace)::SchedulingContext)","symbolLocation":577,"imageIndex":4},{"imageOffset":879058,"symbol":"invocation function for block in facebook::react::RCTNativeModule::invoke(unsigned int, folly::dynamic&&, int)","symbolLocation":103,"imageIndex":4},{"imageOffset":6139,"symbol":"_dispatch_call_block_and_release","symbolLocation":12,"imageIndex":11},{"imageOffset":10810,"symbol":"_dispatch_client_callout","symbolLocation":8,"imageIndex":11},{"imageOffset":41798,"symbol":"_dispatch_lane_serial_drain","symbolLocation":949,"imageIndex":11},{"imageOffset":45027,"symbol":"_dispatch_lane_invoke","symbolLocation":400,"imageIndex":11},{"imageOffset":97094,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":870,"imageIndex":11},{"imageOffset":11491,"symbol":"_pthread_wqthread","symbolLocation":326,"imageIndex":7},{"imageOffset":7271,"symbol":"start_wqthread","symbolLocation":15,"imageIndex":7}],
  "faultingThread" : 1,
  "threads" : [{"id":119337,"queue":"com.apple.main-thread","frames":[{"imageOffset":5794,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":0},{"imageOffset":63101,"symbol":"mach_msg2_internal","symbolLocation":82,"imageIndex":0},{"imageOffset":34586,"symbol":"mach_msg_overwrite","symbolLocation":723,"imageIndex":0},{"imageOffset":6537,"symbol":"mach_msg","symbolLocation":19,"imageIndex":0},{"imageOffset":542942,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":1},{"imageOffset":520239,"symbol":"__CFRunLoopRun","symbolLocation":1371,"imageIndex":1},{"imageOffset":517879,"symbol":"CFRunLoopRunSpecific","symbolLocation":560,"imageIndex":1},{"imageOffset":12938,"symbol":"GSEventRunModal","symbolLocation":139,"imageIndex":2},{"imageOffset":14923307,"symbol":"-[UIApplication _run]","symbolLocation":994,"imageIndex":3},{"imageOffset":14943559,"symbol":"UIApplicationMain","symbolLocation":123,"imageIndex":3},{"imageOffset":24877,"symbol":"main","symbolLocation":72,"imageIndex":4},{"imageOffset":8895,"symbol":"start_sim","symbolLocation":10,"imageIndex":5},{"imageOffset":25360,"symbol":"start","symbolLocation":2432,"imageIndex":6}]},{"triggered":true,"id":119351,"threadState":{"r13":{"value":206158430216},"rax":{"value":0},"rflags":{"value":582},"cpu":{"value":0},"r14":{"value":6},"rsi":{"value":6},"r8":{"value":123145563590960},"cr2":{"value":140703129874270},"rdx":{"value":0},"r10":{"value":0},"r9":{"value":123145563591568},"r15":{"value":22},"rbx":{"value":123145563594752},"trap":{"value":133},"err":{"value":33554760},"r11":{"value":582},"rip":{"value":140704013509390,"matchesCrashFrame":1},"rbp":{"value":123145563591312},"rsp":{"value":123145563591272},"r12":{"value":3847},"rcx":{"value":123145563591272},"flavor":"x86_THREAD_STATE","rdi":{"value":3847}},"queue":"com.facebook.react.ExceptionsManagerQueue","frames":[{"imageOffset":33550,"symbol":"__pthread_kill","symbolLocation":10,"imageIndex":0},{"imageOffset":24443,"symbol":"pthread_kill","symbolLocation":263,"imageIndex":7},{"imageOffset":516064,"symbol":"abort","symbolLocation":130,"imageIndex":8},{"imageOffset":67394,"symbol":"abort_message","symbolLocation":241,"imageIndex":9},{"imageOffset":6493,"symbol":"demangling_terminate_handler()","symbolLocation":266,"imageIndex":9},{"imageOffset":24706,"symbol":"_objc_terminate()","symbolLocation":96,"imageIndex":10},{"imageOffset":64357,"symbol":"std::__terminate(void (*)())","symbolLocation":8,"imageIndex":9},{"imageOffset":64278,"symbol":"std::terminate()","symbolLocation":54,"imageIndex":9},{"imageOffset":10830,"symbol":"_dispatch_client_callout","symbolLocation":28,"imageIndex":11},{"imageOffset":41798,"symbol":"_dispatch_lane_serial_drain","symbolLocation":949,"imageIndex":11},{"imageOffset":45027,"symbol":"_dispatch_lane_invoke","symbolLocation":400,"imageIndex":11},{"imageOffset":97094,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":870,"imageIndex":11},{"imageOffset":11491,"symbol":"_pthread_wqthread","symbolLocation":326,"imageIndex":7},{"imageOffset":7271,"symbol":"start_wqthread","symbolLocation":15,"imageIndex":7}]},{"id":119352,"frames":[{"imageOffset":7256,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":7}]},{"id":119353,"frames":[{"imageOffset":7256,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":7}]},{"id":119354,"name":"com.apple.uikit.eventfetch-thread","frames":[{"imageOffset":5794,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":0},{"imageOffset":63101,"symbol":"mach_msg2_internal","symbolLocation":82,"imageIndex":0},{"imageOffset":34586,"symbol":"mach_msg_overwrite","symbolLocation":723,"imageIndex":0},{"imageOffset":6537,"symbol":"mach_msg","symbolLocation":19,"imageIndex":0},{"imageOffset":542942,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":1},{"imageOffset":520239,"symbol":"__CFRunLoopRun","symbolLocation":1371,"imageIndex":1},{"imageOffset":517879,"symbol":"CFRunLoopRunSpecific","symbolLocation":560,"imageIndex":1},{"imageOffset":5605724,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":213,"imageIndex":12},{"imageOffset":5606357,"symbol":"-[NSRunLoop(NSRunLoop) runUntilDate:]","symbolLocation":72,"imageIndex":12},{"imageOffset":15792262,"symbol":"-[UIEventFetcher threadMain]","symbolLocation":535,"imageIndex":3},{"imageOffset":5775811,"symbol":"__NSThread__start__","symbolLocation":1009,"imageIndex":12},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119355,"frames":[{"imageOffset":7256,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":7}]},{"id":119356,"frames":[{"imageOffset":7256,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":7}]},{"id":119357,"frames":[{"imageOffset":7256,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":7}]},{"id":119360,"name":"com.facebook.react.JavaScript","frames":[{"imageOffset":5794,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":0},{"imageOffset":63101,"symbol":"mach_msg2_internal","symbolLocation":82,"imageIndex":0},{"imageOffset":34586,"symbol":"mach_msg_overwrite","symbolLocation":723,"imageIndex":0},{"imageOffset":6537,"symbol":"mach_msg","symbolLocation":19,"imageIndex":0},{"imageOffset":542942,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":1},{"imageOffset":520239,"symbol":"__CFRunLoopRun","symbolLocation":1371,"imageIndex":1},{"imageOffset":517879,"symbol":"CFRunLoopRunSpecific","symbolLocation":560,"imageIndex":1},{"imageOffset":739773,"symbol":"+[RCTCxxBridge runRunLoop]","symbolLocation":274,"imageIndex":4},{"imageOffset":5775811,"symbol":"__NSThread__start__","symbolLocation":1009,"imageIndex":12},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119361,"name":"JavaScriptCore libpas scavenger","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":1010295,"symbol":"scavenger_thread_main","symbolLocation":1751,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119366,"name":"JIT Worklist Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119367,"name":"JIT Worklist Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119368,"name":"Heap Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119369,"name":"Heap Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119370,"name":"Heap Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119371,"name":"Heap Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119372,"name":"Heap Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119373,"name":"Heap Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119374,"name":"Heap Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]},{"id":119375,"name":"JIT Worklist Helper Thread","frames":[{"imageOffset":16894,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":0},{"imageOffset":26593,"symbol":"_pthread_cond_wait","symbolLocation":1243,"imageIndex":7},{"imageOffset":290823,"symbol":"WTF::ParkingLot::parkConditionallyImpl(void const*, WTF::ScopedLambda<bool ()> const&, WTF::ScopedLambda<void ()> const&, WTF::TimeWithDynamicClockType const&)","symbolLocation":2327,"imageIndex":13},{"imageOffset":40079,"symbol":"bool WTF::Condition::waitUntilUnchecked<WTF::Lock>(WTF::Lock&, WTF::TimeWithDynamicClockType const&)","symbolLocation":143,"imageIndex":13},{"imageOffset":41091,"symbol":"WTF::Detail::CallableWrapper<WTF::AutomaticThread::start(WTF::AbstractLocker const&)::$_0, void>::call()","symbolLocation":323,"imageIndex":13},{"imageOffset":442901,"symbol":"WTF::Thread::entryPoint(WTF::Thread::NewThreadContext*)","symbolLocation":357,"imageIndex":13},{"imageOffset":452585,"symbol":"WTF::wtfThreadEntryPoint(void*)","symbolLocation":9,"imageIndex":13},{"imageOffset":25177,"symbol":"_pthread_start","symbolLocation":125,"imageIndex":7},{"imageOffset":7291,"symbol":"thread_start","symbolLocation":15,"imageIndex":7}]}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140704013475840,
    "size" : 237560,
    "uuid" : "0c2fd2c9-777c-3355-b70f-7b1b6e9d1b0b",
    "path" : "\/usr\/lib\/system\/libsystem_kernel.dylib",
    "name" : "libsystem_kernel.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703131770880,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.CoreFoundation",
    "size" : 3706877,
    "uuid" : "55edff37-af14-3fed-b932-031049d0a665",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/System\/Library\/Frameworks\/CoreFoundation.framework\/CoreFoundation",
    "name" : "CoreFoundation",
    "CFBundleVersion" : "1953.1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703292559360,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.GraphicsServices",
    "size" : 32755,
    "uuid" : "5dad91c5-e70d-3f9a-88f2-2d1ed7c8dd24",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/System\/Library\/PrivateFrameworks\/GraphicsServices.framework\/GraphicsServices",
    "name" : "GraphicsServices",
    "CFBundleVersion" : "1.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4559089664,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.UIKitCore",
    "size" : 28037120,
    "uuid" : "c2258b63-cdcc-3504-a06e-8067adba9c34",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/System\/Library\/PrivateFrameworks\/UIKitCore.framework\/UIKitCore",
    "name" : "UIKitCore",
    "CFBundleVersion" : "6109.1.108"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4444901376,
    "CFBundleShortVersionString" : "1.0.0",
    "CFBundleIdentifier" : "com.denniscoin.Datex",
    "size" : 2359296,
    "uuid" : "92cffd00-e0b0-318e-9447-e6d0a4f1cadc",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/C4926458-B6BB-419B-9165-0EC6781BD878\/data\/Containers\/Bundle\/Application\/FC72E4AA-1786-4E0C-88C8-06A87C758BA1\/Datex.app\/Datex",
    "name" : "Datex",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4453928960,
    "size" : 393216,
    "uuid" : "638f8a1f-2a32-396d-8389-8d7a60b96b8d",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/usr\/lib\/dyld_sim",
    "name" : "dyld_sim"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4633628672,
    "size" : 622592,
    "uuid" : "28fd2071-57f3-3873-87bf-e4f674a82de6",
    "path" : "\/usr\/lib\/dyld",
    "name" : "dyld"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140704013848576,
    "size" : 49144,
    "uuid" : "13b5e252-77d1-31e1-888d-1c5f4426ea87",
    "path" : "\/usr\/lib\/system\/libsystem_pthread.dylib",
    "name" : "libsystem_pthread.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703129358336,
    "size" : 544760,
    "uuid" : "0d67a685-513e-32ef-be4b-9ed886be9acb",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/usr\/lib\/system\/libsystem_c.dylib",
    "name" : "libsystem_c.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703131004928,
    "size" : 90108,
    "uuid" : "b45c6faa-a65d-3be4-8546-f33928080b3b",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/usr\/lib\/libc++abi.dylib",
    "name" : "libc++abi.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703128797184,
    "size" : 212970,
    "uuid" : "6d6cbe47-8a16-3a78-ba90-76b48d34921a",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/usr\/lib\/libobjc.A.dylib",
    "name" : "libobjc.A.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703129903104,
    "size" : 311284,
    "uuid" : "1b19169b-60d3-328c-91c1-b35f3aa8a173",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/usr\/lib\/system\/libdispatch.dylib",
    "name" : "libdispatch.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703135944704,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.Foundation",
    "size" : 9637885,
    "uuid" : "353e6739-fc3a-3636-89f2-194adba7203b",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/System\/Library\/Frameworks\/Foundation.framework\/Foundation",
    "name" : "Foundation",
    "CFBundleVersion" : "1953.1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4507918336,
    "CFBundleShortVersionString" : "8614",
    "CFBundleIdentifier" : "com.apple.JavaScriptCore",
    "size" : 23187456,
    "uuid" : "c95e8ed3-e8f7-316b-9e89-2852f22023b6",
    "path" : "\/Applications\/Xcode.app\/Contents\/Developer\/Platforms\/iPhoneOS.platform\/Library\/Developer\/CoreSimulator\/Profiles\/Runtimes\/iOS.simruntime\/Contents\/Resources\/RuntimeRoot\/System\/Cryptexes\/OS\/System\/Library\/Frameworks\/JavaScriptCore.framework\/JavaScriptCore",
    "name" : "JavaScriptCore",
    "CFBundleVersion" : "8614.2.9.0.8"
  }
],
  "sharedCache" : {
  "base" : 140703128616960,
  "size" : 2998878208,
  "uuid" : "1d27ce4a-5b96-3e8c-bdfd-b8f46155f37e"
},
  "vmSummary" : "ReadOnly portion of Libraries: Total=805.1M resident=0K(0%) swapped_out_or_unallocated=805.1M(100%)\nWritable regions: Total=5.9G written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=5.9G(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nActivity Tracing                   256K        1 \nColorSync                           32K        4 \nFoundation                          16K        1 \nIOSurface                         13.7M        2 \nJS JIT generated code              1.0G        3 \nKernel Alloc Once                    8K        1 \nMALLOC                           252.5M       48 \nMALLOC guard page                   32K        8 \nMALLOC_NANO (reserved)           384.0M        1         reserved VM address space (unallocated)\nSTACK GUARD                       56.1M       20 \nStack                             17.6M       20 \nVM_ALLOCATE                      128.0M        2 \nVM_ALLOCATE (reserved)             3.9G        1         reserved VM address space (unallocated)\nWebKit Malloc                    256.0M        5 \n__DATA                            8315K      403 \n__DATA_CONST                      37.2M      411 \n__DATA_DIRTY                        42K       13 \n__FONT_DATA                        2352        1 \n__LINKEDIT                       364.3M       24 \n__OBJC_RO                         28.3M        1 \n__OBJC_RW                          880K        1 \n__TEXT                           440.7M      420 \ndyld private memory                768K        3 \nmapped file                       38.0M        9 \nshared memory                       24K        3 \n===========                     =======  ======= \nTOTAL                              6.9G     1406 \nTOTAL, minus reserved VM space     2.6G     1406 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "queue" : "com.facebook.react.ExceptionsManagerQueue"
  }
},
  "trialInfo" : {
  "rollouts" : [
    {
      "rolloutId" : "62b4513af75dc926494899c6",
      "factorPackIds" : {
        "COREOS_ICD" : "62fbe3cfa9a700130f60b3ea"
      },
      "deploymentId" : 240000014
    },
    {
      "rolloutId" : "62699e1ec1ff2978b47f6c3b",
      "factorPackIds" : {
        "SIRI_FIND_MY_CONFIGURATION_FILES" : "631f72d1de559130376df1fb"
      },
      "deploymentId" : 240000023
    }
  ],
  "experiments" : [

  ]
}
}

Model: MacBookPro16,1, BootROM 1916.40.8.0.0 (iBridge: 20.16.420.0.0,0), 6 processors, 6-Core Intel Core i7, 2,6 GHz, 16 GB, SMC 
Graphics: Intel UHD Graphics 630, Intel UHD Graphics 630, Built-In
Display: Color LCD, 3072 x 1920 Retina, Main, MirrorOff, Online
Graphics: AMD Radeon Pro 5300M, AMD Radeon Pro 5300M, PCIe, 4 GB
Memory Module: BANK 0/ChannelA-DIMM0, 8 GB, DDR4, 2667 MHz, SK Hynix, HMA81GS6CJR8N-VK
Memory Module: BANK 2/ChannelB-DIMM0, 8 GB, DDR4, 2667 MHz, SK Hynix, HMA81GS6CJR8N-VK
AirPort: spairport_wireless_card_type_wifi (0x14E4, 0x7BF), wl0: Sep 14 2022 18:03:20 version 9.30.489.3.32.5.84 FWID 01-8b6fe36e
Bluetooth: Version (null), 0 services, 0 devices, 0 incoming serial ports
Network Service: Wi-Fi, AirPort, en0
USB Device: USB31Bus
USB Device: T2Bus
USB Device: composite_device
USB Device: Touch Bar Backlight
USB Device: Touch Bar Display
USB Device: Apple Internal Keyboard / Trackpad
USB Device: Headset
USB Device: Ambient Light Sensor
USB Device: FaceTime HD Camera (Built-in)
USB Device: Apple T2 Controller
Thunderbolt Bus: MacBook Pro, Apple Inc., 63.5
Thunderbolt Bus: MacBook Pro, Apple Inc., 63.5
