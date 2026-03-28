chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "open-tab-in-group") return;

  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!activeTab) return;

  // Create the new tab right after the current one
  const newTab = await chrome.tabs.create({
    windowId: activeTab.windowId,
    index: activeTab.index + 1,
    active: true,
  });

  // If the current tab belongs to a group, add the new tab to it
  if (activeTab.groupId !== chrome.tabGroups.TAB_GROUP_ID_NONE) {
    await chrome.tabs.group({
      tabIds: newTab.id,
      groupId: activeTab.groupId,
    });
  }
});
